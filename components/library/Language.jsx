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
          `flex items-center text-white gap-2 ${
            isLangChangeOpen && "text-primary"
          }`,
          className
        )}
      >
        <span className="font-medium">{isLangChange}</span>
        <GrLanguage className={`text-xl ${icon}`} />
      </button>
      {isLangChangeOpen && (
        <div className="absolute top-[64px] right-1/2 transform translate-x-1/2 w-40 bg-gradient-to-bl from-darkOne to-darkTwo border-darkThree flex flex-col py-3 border rounded">
          {["En", "Bn", "Hi", "Ur", "Ar"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLangChange(lang)}
              className="w-full btn btn-sm font-medium bg-transparent text-white hover:bg-white/5 border-none rounded-none"
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
