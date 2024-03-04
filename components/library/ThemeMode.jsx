import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");

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
      className="group relative btn btn-sm btn-circle flex justify-center items-center bg-black hover:bg-black dark:bg-white dark:hover:bg-white border-none"
    >
      {theme ? (
        <MdModeNight className="text-xl text-white"></MdModeNight>
      ) : (
        <MdLightMode className="text-xl text-black"></MdLightMode>
      )}
    </button>
  );
};

export default ThemeMode;
