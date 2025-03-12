"use client";
import styles from "./page.module.css";
import ToggleSection from "@components/ToggleSection";
import TodoSection from "@components/TodoSection";
import { HabitIcon, NoteIcon, ProhibitionIcon, TodoIcon } from "@icons/index";
import { useLocalStorage } from "@hooks/index";
import {
  INITIAL_STATE_DAILY_TODOS,
  INITIAL_STATE_WORK_TASKS,
  TODO_SECTIONS,
  TODO_TIME_FORMATS,
} from "@constants/index";

// export const TODO_SECTIONS_KEYS = {
//   DAILY: "daily",
//   WORK: "work",
//   STUDY: "study",
//   HEALTH: "health",
//   MENTAL_HEALTH: "mental_health",
//   SOCIAL: "social",
// };

export const APP_SECTIONS_KEYS = {
  TO_DO: "to_do",
  HABIT: "habit",
  PROHIBITION: "prohibition",
  NOTE: "note",
};

const APP_SECTIONS = [
  { key: APP_SECTIONS_KEYS.TO_DO, label: "to do", icon: <TodoIcon /> },
  { key: APP_SECTIONS_KEYS.HABIT, label: "habit", icon: <HabitIcon /> },
  {
    key: APP_SECTIONS_KEYS.PROHIBITION,
    label: "prohibition",
    icon: <ProhibitionIcon />,
  },
  { key: APP_SECTIONS_KEYS.NOTE, label: "note", icon: <NoteIcon /> },
];

export default function Home() {
  const [appSection, setAppSection] = useLocalStorage(
    "app_section",
    APP_SECTIONS[0].key
  );
  const [todoSection, setTodoSection] = useLocalStorage(
    "todo_section",
    Object.values(TODO_SECTIONS)[0].key
  );

  return (
    <div className={`page-container glass ${styles.container}`}>
      <div className={styles.header}>
        <h5>Welcome back,</h5>
        <h1>Kamil Garibov</h1>
      </div>
      <ToggleSection
        sections={APP_SECTIONS}
        defaultSection={appSection}
        onChange={setAppSection}
      />
      {appSection === "to_do" && (
        <>
          <ToggleSection
            sections={Object.values(TODO_SECTIONS)}
            defaultSection={todoSection}
            onChange={setTodoSection}
          />
          {todoSection === TODO_SECTIONS.DAILY.key ? (
            <TodoSection
              key={TODO_SECTIONS.DAILY.key}
              dataKey={TODO_SECTIONS.DAILY}
              initialState={INITIAL_STATE_DAILY_TODOS}
            />
          ) : todoSection === TODO_SECTIONS.WORK.key ? (
            <TodoSection
              key={TODO_SECTIONS.WORK.key}
              dataKey={TODO_SECTIONS.WORK}
              initialState={INITIAL_STATE_WORK_TASKS}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
