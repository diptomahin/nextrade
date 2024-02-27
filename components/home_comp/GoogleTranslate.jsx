import { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
  const scriptLoaded = useRef(false);
  const googleTranslateElement = useRef(null);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'es,fr,de',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      googleTranslateElement.current
    );
  };

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    addScript.onload = () => {
      scriptLoaded.current = true;
    };
    document.head.appendChild(addScript);

    return () => {
      document.head.removeChild(addScript);
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded.current) {
      googleTranslateElementInit();
    }
  }, [scriptLoaded]);

  return <div ref={googleTranslateElement} />;
};

export default GoogleTranslate;