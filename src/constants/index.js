export const INITIAL_THEME = "dark";
export const TIME_FORMAT = {
  DUE_DATE: { key: "dueDate", label: "due date" },
  AT_DATE: { key: "atDate", label: "at date" },
  INTERVAL_DATE: { key: "intervalDate", label: "interval date" },
  FOREVER: { key: "forever", label: "forever" },
};
export const TODO_TIME_FORMATS = {
  DAILY: {
    key: "daily",
    options: [TIME_FORMAT.DUE_DATE, TIME_FORMAT.FOREVER],
  },
  NORMAL: {
    key: "normal",
    options: [
      TIME_FORMAT.DUE_DATE,
      TIME_FORMAT.AT_DATE,
      TIME_FORMAT.INTERVAL_DATE,
      TIME_FORMAT.FOREVER,
    ],
  },
  PROHIBITION: {
    key: "prohibition",
    options: [
      TIME_FORMAT.DUE_DATE,
      TIME_FORMAT.INTERVAL_DATE,
      TIME_FORMAT.FOREVER,
    ],
  },
};
export const INITIAL_STATE = [
  {
    id: 1,
    label: "Code",
    description: "Code everyday",
    status: "pending",
    created_at: "01/02/2025",
    nestedCount: 0,
    showChildren: false,
    children: [],
  },
  {
    id: 2,
    label: "Read book",
    description: "reading book is so important",
    status: "pending",
    created_at: "01/02/2025",
    nestedCount: 4,
    showChildren: false,
    children: [
      {
        id: 3,
        label: "Read book #1",
        description: "the book #1 is so interesting",
        status: "pending",
        created_at: "01/02/2025",
        nestedCount: 0,
        showChildren: false,
      },
      {
        id: 4,
        label: "Read book #2",
        description: "the book #2 is so usefull",
        status: "pending",
        created_at: "01/02/2025",
        nestedCount: 2,
        showChildren: false,
        children: [
          {
            id: 5,
            label: "Read chapter #9",
            description: "look at the highlighted text",
            status: "pending",
            created_at: "01/02/2025",
            nestedCount: 1,
            showChildren: false,
            children: [
              {
                id: 6,
                label: "Google the highlighted text",
                description: "",
                status: "pending",
                created_at: "01/02/2025",
                nestedCount: 0,
                showChildren: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
export const INITIAL_STATE_WORK_TASKS = [
  {
    id: 1,
    label: "Find job",
    description: "Find a job that fits you",
    status: "pending",
    created_at: "01/02/2025",
    nestedCount: 0,
    showChildren: false,
    timeFormat: TIME_FORMAT.FOREVER.key,
    children: [],
  },
  {
    id: 2,
    label: "Build app",
    description: "build a todo app",
    status: "pending",
    created_at: "01/02/2025",
    nestedCount: 2,
    showChildren: false,
    timeFormat: TIME_FORMAT.DUE_DATE.key,
    dueDate: "31/03/2025",
    children: [
      {
        id: 3,
        label: 'Develop existing "nested form" app',
        description: "add new features",
        status: "pending",
        created_at: "01/02/2025",
        nestedCount: 0,
        showChildren: false,
        timeFormat: TIME_FORMAT.DUE_DATE.key,
        dueDate: "31/03/2025",
        children: [],
      },
      {
        id: 4,
        label: "Design this app",
        description: "design the app glassmorphism",
        status: "pending",
        created_at: "01/02/2025",
        nestedCount: 0,
        showChildren: false,
        timeFormat: TIME_FORMAT.DUE_DATE.key,
        dueDate: "31/03/2025",
        children: [],
      },
    ],
  },
];
export const INITIAL_STATE_DAILY_TODOS = [
  {
    id: 1,
    label: "Code",
    description: "Code everyday",
    status: "pending",
    created_at: "01/02/2025",
    nestedCount: 0,
    showChildren: false,
    timeFormat: TIME_FORMAT.FOREVER.key,
    children: [],
  },
  {
    id: 2,
    label: "Read book",
    description: "reading book is so important",
    status: "pending",
    created_at: "01/02/2025",
    nestedCount: 4,
    showChildren: false,
    timeFormat: TIME_FORMAT.DUE_DATE.key,
    dueDate: "04/04/2025",
    children: [],
  },
];
export const TODO_STATUSES = {
  PENDING: {
    key: "pending",
    label: "Pending",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V12L16 14"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="gray"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  IN_PROGRESS: {
    key: "in_progress",
    label: "In Progress",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V6"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18V22"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.93 4.93L7.76 7.76"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.24 16.24L19.07 19.07"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  // ON_HOLD: {
  //   key: "on_hold",
  //   label: "On Hold",
  //   icon: (
  //     <svg
  //       width="20"
  //       height="20"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M10 4V20"
  //         stroke="orange"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M14 4V20"
  //         stroke="orange"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   ),
  // },
  CANCELLED: {
    key: "cancelled",
    label: "Cancelled",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  COMPLETED: {
    key: "completed",
    label: "Completed",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12L10 17L19 7"
          stroke="green"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};
const TODO_STATUSES_OLD = [
  {
    key: "pending",
    label: "Pending",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V12L16 14"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="gray"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    key: "in_progress",
    label: "In Progress",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V6"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18V22"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.93 4.93L7.76 7.76"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.24 16.24L19.07 19.07"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "on_hold",
    label: "On Hold",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4V20"
          stroke="orange"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4V20"
          stroke="orange"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "cancelled",
    label: "Cancelled",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "completed",
    label: "Completed",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12L10 17L19 7"
          stroke="green"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const TODO_SECTIONS = {
  DAILY: {
    key: "daily",
    label: "daily to-dos",
    timeFormat: TODO_TIME_FORMATS.DAILY,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  WORK: {
    key: "work",
    label: "work tasks",
    timeFormat: TODO_TIME_FORMATS.NORMAL,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3h-4a2 2 0 0 0-2 2v2h8V5a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  STUDY: {
    key: "study",
    label: "study goals",
    timeFormat: TODO_TIME_FORMATS.NORMAL,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  HEALTH: {
    key: "health",
    label: "health",
    timeFormat: TODO_TIME_FORMATS.NORMAL,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  MENTAL_HEALTH: {
    key: "mental",
    label: "mental health",
    timeFormat: TODO_TIME_FORMATS.NORMAL,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M12 4h9" />
        <path d="M12 12h9" />
        <path d="M5 20h.01" />
        <path d="M5 4h.01" />
        <path d="M5 12h.01" />
      </svg>
    ),
  },
  SOCIAL: {
    key: "social",
    label: "social",
    timeFormat: TODO_TIME_FORMATS.NORMAL,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
};
