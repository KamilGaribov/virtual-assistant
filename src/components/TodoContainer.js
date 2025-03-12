const SECTIONS = [
  {
    key: "daily",
    label: "Daily To-Dos",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>',
  },
  {
    key: "work",
    label: "Work Tasks",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 3h-4a2 2 0 0 0-2 2v2h8V5a2 2 0 0 0-2-2z"/></svg>',
  },
  {
    key: "study",
    label: "Study Goals",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10l-9-5-9 5 9 5 9-5z"/><path d="M21 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="M3.27 6.96l8.73 4.87 8.73-4.87"/></svg>',
  },
  {
    key: "health",
    label: "Health",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  },
  {
    key: "mental_health",
    label: "Mental Health",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M12 4h9"/><path d="M12 12h9"/><path d="M5 20h.01"/><path d="M5 4h.01"/><path d="M5 12h.01"/></svg>',
  },
  {
    key: "social",
    label: "Social",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  },
  {
    key: "personal_growth",
    label: "Personal Growth",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.09 3.26L16 6l-2.91 2.09L12 12l-1.09-3.91L8 6l2.91-2.09L12 2z"/><path d="M12 12v10"/></svg>',
  },
  {
    key: "hobbies",
    label: "Hobbies",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.09 3.26L16 6l-2.91 2.09L12 12l-1.09-3.91L8 6l2.91-2.09L12 2z"/><path d="M12 12v10"/></svg>',
  },
  {
    key: "other",
    label: "Other",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  },
];

export default function TodoContainer() {
  return (
    <div className="todo-container">
      <h1>Switch section</h1>
      {SECTIONS.map((section) => (
        <div className="section" key={section.key}>
          <span>{section.label}</span>
          <div dangerouslySetInnerHTML={{ __html: section.icon }} />
        </div>
      ))}
    </div>
  );
}
