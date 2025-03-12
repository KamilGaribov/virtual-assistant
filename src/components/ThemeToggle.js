"use client"
import { useTheme } from "@hooks/index";
import { useEffect } from "react";
import { DarkModeSvg, LightModeSvg } from "@icons/index";

export default function ThemeToggle() {
    const [theme, setTheme] = useTheme();
    useEffect(() => {
        // document.body.setAttribute("data-theme", theme);
    }, [theme]);
    document.body.setAttribute("data-theme", theme);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.setAttribute("data-theme", newTheme);
    };

    return theme === "light" ? (
        <DarkModeSvg size="24px" onClick={toggleTheme} />
    ) : (
        <LightModeSvg size="24px" onClick={toggleTheme} />
    );

    return (
        <button
            onClick={toggleTheme}
            label={`to ${
                theme === "light" ? (
                    <DarkModeSvg onClick={toggleTheme} />
                ) : (
                    <LightModeSvg onClick={toggleTheme} />
                )
            } mode`}
        />
    );
}