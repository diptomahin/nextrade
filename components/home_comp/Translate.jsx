import React from 'react';
import "./Translate.css"
import { useEffect } from "react";

const Translate = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
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
      }, []);

    return (

        <div>
          <h1 id="google_translate_element">

          </h1>
        </div>

    );
};

export default Translate;