import React from "react";
import { GrLanguage } from "react-icons/gr";

const Language = () => {
  const [isLangChangeOpen, setIsLangChangeOpen] = React.useState(false);
  const [isLangChange, setIsLangChange] = React.useState("Eng");

  return (
    <div className="relative">
      <button
        onClick={() => setIsLangChangeOpen(!isLangChangeOpen)}
        className="flex items-center gap-2"
      >
        <GrLanguage className="w-5 h-5" /> <span>{isLangChange}</span>
      </button>
      {isLangChangeOpen && (
        <div className="absolute top-12 right-1/2 transform translate-x-1/2 w-40 bg-white flex flex-col gap-2 p-3 border rounded-xl">
          <button
            onClick={() => {
              setIsLangChange("En");
              setIsLangChangeOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary  rounded-full"
          >
            English
          </button>
          <button
            onClick={() => {
              setIsLangChange("Bn");
              setIsLangChangeOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary  rounded-full"
          >
            Bangla
          </button>
          <button
            onClick={() => {
              setIsLangChange("Hi");
              setIsLangChangeOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary  rounded-full"
          >
            Hindi
          </button>
          <button
            onClick={() => {
              setIsLangChange("Ur");
              setIsLangChangeOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary  rounded-full"
          >
            Urdu
          </button>
          <button
            onClick={() => {
              setIsLangChange("Ar");
              setIsLangChangeOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary  rounded-full"
          >
            Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default Language;
