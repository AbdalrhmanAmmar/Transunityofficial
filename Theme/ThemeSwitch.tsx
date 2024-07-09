"use client";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { LuSun } from "react-icons/lu";


const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(
    theme === "light" ? <LuSun /> : <FaMoon />
  );

  return (
    <button
      aria-label="toggle theme"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        setThemeIcon(theme === "light" ? <FaMoon /> : <LuSun />);
      }}
    >
      {themeIcon}
    </button>
  );
};

export default ThemeSwitch;
