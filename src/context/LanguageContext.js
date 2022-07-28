import React, { useState, useContext } from 'react';

const Context = React.createContext('english');

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  const onLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <Context.Provider value={{ language, onLanguageChange }}>
      {children}
    </Context.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(Context);
};
