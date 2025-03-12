"use client";
import styles from "@styles/components/TodoSection.module.css";

import React, { useEffect, useState } from "react";
import { useData } from "@hooks/index";
import {
  countNestedChildren,
  formatDate,
  parseDate,
  uniqueID,
  updateArray,
} from "@utils/index";
import { AddIcon, DeleteIcon, DropdownIcon, DropupIcon } from "@icons/index";
import {
  TIME_FORMAT,
  TODO_STATUSES,
  TODO_TIME_FORMATS,
} from "@constants/index";
import dynamic from "next/dynamic";
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
import "react-datepicker/dist/react-datepicker.css";

const ADD_NEW_FIELDS = {
  label: {
    name: "label",
    htmlElement: "input",
    type: "text",
    placeholder: "enter label",
    required: true,
  },
  description: {
    name: "description",
    htmlElement: "textarea",
    // type: "text",
    placeholder: "enter description",
    required: false,
  },
  timeFormat: {
    name: "timeFormat",
    htmlElement: "select",
    // type: "text",
    options: Object.values(TIME_FORMAT),
    placeholder: "enter time format",
    required: true,
  },
};

const initialFormData = Object.keys(ADD_NEW_FIELDS).reduce((acc, field) => {
  acc[field] = "";
  return acc;
}, {});

const DAILY_TASKS = [
  {
    id: 90,
    label: "new daily",
    description: "new daily Code everyday",
    status: "pending",
    created_at: "2025-02-01T00:00:00.000Z",
    nestedCount: 0,
    showChildren: false,
    children: [],
    timeFormat: TIME_FORMAT.DUE_DATE,
    dueDate: "2025-08-08T00:00:00.000Z",
  },
];

const initialItemData = {
  id: uniqueID(),
  status: TODO_STATUSES.PENDING.key,
  created_at: formatDate(new Date()),
  nestedCount: 0,
  children: [],
  showChildren: false,
};

export function TodoCreateForm({
  handleCreate,
  formData,
  handleChangeForm,
  dataKey,
}) {
  return (
    <div className="item-container add-new-container glass-3">
      <form onSubmit={handleCreate} className="initial-container">
        <div>
          {Object.entries(ADD_NEW_FIELDS).map(([key, input]) =>
            input.htmlElement === "input" ? (
              <input
                key={key}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                required={input.required}
                value={formData[key] || ""}
                onChange={(e) => handleChangeForm(e)}
              />
            ) : input.htmlElement === "textarea" ? (
              <textarea
                key={key}
                name={input.name}
                placeholder={input.placeholder}
                required={input.required}
                value={formData[key] || ""}
                onChange={(e) => handleChangeForm(e)}
              />
            ) : input.htmlElement === "select" ? (
              input.name === "timeFormat" ? (
                <>
                  <select
                    key={key}
                    name={input.name}
                    value={formData[key]}
                    onChange={(e) => handleChangeForm(e)}
                    required={input.required}
                  >
                    <option value="" disabled>
                      {input.placeholder}
                    </option>
                    {Object.values(TODO_TIME_FORMATS)
                      .find((value) => value.key === dataKey.timeFormat.key)
                      .options.map((option) => (
                        <option key={option.key} value={option.key}>
                          {option.label}
                        </option>
                      ))}
                  </select>
                </>
              ) : null
            ) : null
          )}
          {formData.timeFormat === TIME_FORMAT.DUE_DATE.key ? (
            <DateInput
              name={TIME_FORMAT.DUE_DATE.key}
              placeholder={TIME_FORMAT.DUE_DATE.label}
              required={true}
              value={formData[TIME_FORMAT.DUE_DATE.key] || ""}
              onChange={handleChangeForm}
            />
          ) : formData.timeFormat === TIME_FORMAT.AT_DATE.key ? (
            <DateInput
              name={TIME_FORMAT.AT_DATE.key}
              placeholder={TIME_FORMAT.AT_DATE.label}
              required={true}
              value={formData[TIME_FORMAT.AT_DATE.key] || ""}
              onChange={handleChangeForm}
            />
          ) : formData.timeFormat === TIME_FORMAT.INTERVAL_DATE.key ? (
            <DateIntervalInput
              name={TIME_FORMAT.INTERVAL_DATE.key}
              placeholder={TIME_FORMAT.INTERVAL_DATE.label}
              required={true}
              value={formData[TIME_FORMAT.INTERVAL_DATE.key] || ""}
              onChange={handleChangeForm}
            />
          ) : null}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export const DateInput = ({
  name,
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <div style={{ maxWidth: "0px" }}>
      <DatePicker
        placeholderText={placeholder}
        required={required}
        selected={value ? parseDate(value) : new Date()}
        onChange={(value) =>
          onChange({ target: { name, value: formatDate(value) } })
        }
        dateFormat="dd/MM/yyyy"
        portalId="root"
        // inline
        // style={{ maxWidth: "40px", padding: "80px", border: "10px solid #ccc" }}
      />
    </div>
  );
};

export const DateIntervalInput = ({
  name,
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  const [startDate, setStartDate] = useState(
    value ? parseDate(value.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    value ? parseDate(value.endDate) : null
  );
  const onChange2 = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (formatDate(end) !== "01/01/1970") {
      onChange({
        target: {
          name,
          value: {
            startDate: formatDate(start),
            endDate: formatDate(end),
          },
        },
      });
    }
  };

  return (
    <div style={{ maxWidth: "0px" }}>
      <DatePicker
        placeholderText={placeholder}
        required={required}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={(values) => onChange2(values)}
        dateFormat="dd/MM/yyyy"
        selectsRange
        popperClassName="higher-z-index"
        portalId="root"
        // style={{ zIndex: "99" }}
      />
    </div>
  );
};

export default function TodoSection({ dataKey = "data", initialState }) {
  const [items, setItems] = useData(dataKey.key, initialState);
  const [formData, setFormData] = useState(initialFormData);
  const [openForm, setOpenForm] = useState(false);

  const updateState = (item, method) => {
    if (method === "UPDATE") {
      setItems([...updateArray(items, item)]);
    } else if (method === "DELETE") {
      setItems([...items.filter((i) => i.id !== item.id)]);
    }
  };
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    const addedItem = {
      ...initialItemData,
      ...formData,
    };
    const updatedSelf = [...items, addedItem];
    setItems(updatedSelf);
    setOpenForm(false);
    setFormData(initialFormData);
  };

  return (
    <>
      <div>
        <span>add new</span>
        <button type="button" onClick={() => setOpenForm((prev) => !prev)}>
          <AddIcon />
        </button>
      </div>
      {(items.length > 0 || openForm) && (
        <div className="items-container">
          {openForm && (
            <TodoCreateForm
              handleCreate={handleCreate}
              formData={formData}
              handleChangeForm={handleChangeForm}
              dataKey={dataKey}
            />
          )}
          {items.map((item) => (
            <Item
              item={item}
              updateState={updateState}
              key={item.id}
              dataKey={dataKey}
            />
          ))}
        </div>
      )}
    </>
  );
}

const Item = ({ item, updateState, updateParent, dataKey }) => {
  console.log("item: ", item)
  console.log("dataKey", dataKey)
  const [itemData, setItemData] = useState(item);
  const [formData, setFormData] = useState(initialFormData);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    setItemData(item);
  }, [item]);

  const updateParentProp = (child, method) => {
    if (method === "UPDATE") {
      var updatedSelf = {
        ...item,
        children: [...updateArray(item.children, child)],
      };
    } else if (method === "DELETE") {
      var updatedSelf = {
        ...item,
        children: item.children.filter((i) => i.id !== child.id),
      };
    }
    updatedSelf.nestedCount = countNestedChildren(updatedSelf);
    if (updateParent) {
      updateParent(updatedSelf, "UPDATE");
    } else {
      updateState(updatedSelf, "UPDATE");
    }
  };

  const handleCallback = (item, method) => {
    if (updateParent) {
      updateParent(item, method);
    } else {
      updateState(item, method);
    }
  };

  const handleBlur = () => {
    handleCallback(itemData, "UPDATE");
  };

  const handleDelete = (item) => {
    handleCallback(item, "DELETE");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const addedItem = {
      ...initialItemData,
      ...formData,
    };
    const updatedSelf = {
      ...item,
      nestedCount: item.nestedCount + 1,
      showChildren: true,
      children: item.children ? [...item.children, addedItem] : [addedItem],
    };
    handleCallback(updatedSelf, "UPDATE");
    setFormData(initialFormData);
    setOpenForm(false);
  };

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    const newItemData = {
      ...itemData,
      [name]: value,
    };
    setItemData(newItemData);
    console.log("bura---", name, value);
    if (
      e.target.tagName === "SELECT" ||
      name === "dueDate" ||
      (name === "intervalDate" && value.endDate)
    ) {
      handleCallback(newItemData, "UPDATE");
    }
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div key={item.id} className="item-container glass-3">
      <div className="initial-container">
        <div>
          <input
            type="text"
            defaultValue={item.label}
            name="label"
            onChange={handleChangeData}
            onBlur={handleBlur}
          />
          <textarea
            name="description"
            defaultValue={item.description}
            onChange={handleChangeData}
            onBlur={handleBlur}
            rows={2}
            cols={50}
          />
          <div>
            <select
              name="timeFormat"
              value={item.timeFormat}
              onChange={(e) => handleChangeData(e)}
              required={true}
            >
              <option value="" disabled>
                time format
              </option>
              {Object.values(TODO_TIME_FORMATS)
                .find((value) => value.key === dataKey.timeFormat.key)
                .options.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
            </select>
            {item.timeFormat === TIME_FORMAT.DUE_DATE.key ? (
              <DateInput
                name={TIME_FORMAT.DUE_DATE.key}
                placeholder={TIME_FORMAT.DUE_DATE.label}
                required={true}
                value={item[TIME_FORMAT.DUE_DATE.key] || ""}
                onChange={handleChangeData}
              />
            ) : item.timeFormat === TIME_FORMAT.AT_DATE.key ? (
              <DateInput
                name={TIME_FORMAT.AT_DATE.key}
                placeholder={TIME_FORMAT.AT_DATE.label}
                required={true}
                value={item[TIME_FORMAT.AT_DATE.key] || ""}
                onChange={handleChangeData}
              />
            ) : item.timeFormat === TIME_FORMAT.INTERVAL_DATE.key ? (
              <DateIntervalInput
                name={TIME_FORMAT.INTERVAL_DATE.key}
                placeholder={TIME_FORMAT.INTERVAL_DATE.label}
                required={true}
                value={item[TIME_FORMAT.INTERVAL_DATE.key] || ""}
                onChange={handleChangeData}
              />
            ) : item.timeFormat === TIME_FORMAT.FOREVER.key ? (
              null
            ) : null}
          </div>
        </div>
        <div>
          {Object.values(TODO_STATUSES).find((s) => s.key === item.status).icon}
          <select
            name="status"
            value={item.status}
            onChange={handleChangeData}
            onBlur={handleBlur}
          >
            <option value="" disabled>
              select status
            </option>
            {Object.values(TODO_STATUSES).map((status) => (
              <option key={status.key} value={status.key}>
                {status.label}
              </option>
            ))}
          </select>
          {item.children && item.children.length > 0 && (
            <button
              className="show-children dropdown"
              onClick={() =>
                handleCallback(
                  { ...itemData, showChildren: !itemData.showChildren },
                  "UPDATE"
                )
              }
            >
              {item.showChildren ? <DropupIcon /> : <DropdownIcon />}
              <span>{item.nestedCount}</span>
            </button>
          )}
          <button type="button" onClick={() => setOpenForm((prev) => !prev)}>
            <AddIcon />
          </button>
          <button
            className="bg-red"
            type="button"
            onClick={() => handleDelete(item)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="children">
        {openForm && (
          <TodoCreateForm
            handleCreate={handleCreate}
            formData={formData}
            handleChangeForm={handleChangeForm}
            dataKey={dataKey}
          />
        )}
        {item.children &&
          item.showChildren &&
          item.children.map((child) => (
            <Item
              key={child.id}
              item={child}
              updateState={updateState}
              updateParent={updateParentProp}
              dataKey={dataKey}
            />
          ))}
      </div>
    </div>
  );
};
