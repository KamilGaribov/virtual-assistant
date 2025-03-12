import { useState } from "react";
import { INITIAL_THEME } from "@constants/index";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const storage = window.localStorage.getItem(key);
      return storage ? JSON.parse(storage) : initialValue;
    }
  });
  const updateState = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateState];
};

export const useData = (key = "data", initialValue) => {
  const [data, setData] = useLocalStorage(key, initialValue);
  const updateData = (d) => {
    setData(d);
  };
  return [data, updateData];
};

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", INITIAL_THEME);
  const updateTheme = () => {
      setTheme(theme == "light" ? "dark" : "light");
  };
  return [theme, updateTheme];
};
