"use client"
import { useEffect } from "react";
import "./Translate.css";

const Translate = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup function to remove the script when component unmounts
      return () => {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    };

    loadGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element" />;
};

export default Translate;

