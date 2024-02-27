import Script from "next/script";
import React from "react";

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

  React.useEffect(() => {
    if (typeof window !== "undefined" && !window.google) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js";
      script.async = true;
      script.onload = googleTranslateElementInit;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Script id="google-translate-init" strategy="lazyOnload">
        {`
          window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          };
        `}
      </Script>
      <div id="google_translate_element" />
    </>
  );
};

export default Translate;