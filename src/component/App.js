import React, { useState } from 'react';
import UserCreate from './UserCreate';
import ColorContext from '../context/ColorContext';
import LanguageContext from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

function App() {
  const [language, setLanguage] = useState('english');
  const onLanguageHandler = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="ui container">
      <div>
        <LanguageSelector onLanguageChange={onLanguageHandler} />
      </div>
      <div>
        <ColorContext.Provider value="green">
          <LanguageContext.Provider value={language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    </div>
  );
}

export default App;
