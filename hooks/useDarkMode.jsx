"use client"
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const onChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', onChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;
