"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { useEffect } from "react";

export default function ToggleSection({ sections, defaultSection, onChange }) {
  const [selected, setSelected] = useState(defaultSection);
  const [styleLeft, setStyleLeft] = useState("0%");

  useEffect(() => {
    const index = sections
      .map((section) => section.key)
      .indexOf(defaultSection);
    const left = `${(index / sections.length) * 100}%`;
    setStyleLeft(left);
  }, [defaultSection, sections]);

  return (
    <div className={`${styles.toggle_section_container} glass-2`}>
      <div
        className={styles.active_bar}
        style={{
          left: styleLeft,
        }}
      />
      {sections.map((section) => (
        <div
          key={section.label}
          className={`${styles.toggle_section} ${
            section === selected && styles.active_section
          } `}
          onClick={() => {
            setSelected(section);
            onChange(section.key);
          }}
        >
          {section.icon}
          <span>{section.label}</span>
        </div>
      ))}
    </div>
  );
}
