"use client";
import { useEffect } from "react";
import "./Translate.css";

const Translate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  
    // Cleanup function to remove the Google Translate widget
   // Cleanup function to remove the Google Translate widget
return () => {
  const translateElement = document.getElementById("google_translate_element");
  if (translateElement && translateElement.parentNode) {
    translateElement.parentNode.removeChild(translateElement);
  }
};

  }, []);
  

  return <div id="google_translate_element"></div>;
};

export default Translate;