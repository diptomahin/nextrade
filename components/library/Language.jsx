import React from "react";
import { GrLanguage } from "react-icons/gr";
import cn from "../utils/cn";

const Language = ({ className, icon }) => {
  const [isLangChangeOpen, setIsLangChangeOpen] = React.useState(false);
  const [isLangChange, setIsLangChange] = React.useState("En");

  React.useEffect(() => {
    const savedLang = localStorage.getItem("isLangChange");
    if (savedLang) {
      setIsLangChange(savedLang);
    }
  }, []);

  const handleLangChange = (lang) => {
    setIsLangChange(lang);
    setIsLangChangeOpen(false);
    localStorage.setItem("isLangChange", lang);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsLangChangeOpen(!isLangChangeOpen)}
        className={cn(
          `flex items-center text-white gap-1 ${isLangChangeOpen && "text-primary"}`,
          className
        )}
      >
        <GrLanguage className={icon} />
        <span>{isLangChange}</span>
      </button>
      {isLangChangeOpen && (
        <div className="absolute top-12 right-1/2 transform translate-x-1/2 w-40 bg-white flex flex-col gap-2 p-3 border rounded">
          {["En", "Bn", "Hi", "Ur", "Ar"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLangChange(lang)}
              className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary rounded-full"
            >
              {lang === "En" && "English"}
              {lang === "Bn" && "Bangla"}
              {lang === "Hi" && "Hindi"}
              {lang === "Ur" && "Urdu"}
              {lang === "Ar" && "Arabic"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
