import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');
  const [language, setLanguage] = useState('en');

  const colors = {
    Light: {
      primary: '#007BFF',
      text: '#343A40',
      background: '#FFFFFF',
    },
    Dark: {
      primary: '#007BFF',
      text: '#FFFFFF',
      background: '#212529',
    },
  };

  const fonts = {
    heading: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif',
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.backgroundColor = colors[theme].background;
    document.body.style.color = colors[theme].text;
  }, [language, theme]);

  const value = {
    theme,
    language,
    colors: colors[theme],
    fonts,
    toggleTheme,
    toggleLanguage,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
