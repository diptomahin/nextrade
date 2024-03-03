import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");

  // const [showThemeTooltip, setShowThemeTooltip] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <button
      onClick={handleTheme}
      className="relative btn btn-circle flex justify-center items-center bg-orange-500 hover:bg-orange-600 dark:bg-teal-700 dark:hover:bg-teal-800 border-none"
    >
      {theme ? (
        <MdModeNight className="w-7 h-7 text-white "></MdModeNight>
      ) : (
        <MdLightMode className="w-7 h-7 text-white"></MdLightMode>
      )}
    </button>
  );
};

export default ThemeMode;
