export default function About() {
  const INCLUDES = [
    "daily tasks",
    "work tasks",
    "notes",
    "time tracker",
    "money tracker",
    "and so on",
  ];
  return (
    <div className={`page-container glass`}>
      <h2>Virtual assistant application</h2>
      <p>app is in development...</p>
      <h4>includes:</h4>
      {INCLUDES.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
