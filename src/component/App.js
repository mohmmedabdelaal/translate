import React from 'react';
import UserCreate from './UserCreate';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';
import { useLanguageContext } from '../context/LanguageContext';

function App() {
  const { onLanguageChange } = useLanguageContext();

  return (
    <div className="ui container">
      <div>
        <LanguageSelector onLanguageChange={onLanguageChange} />
      </div>
      <div>
        <ColorContext.Provider value="green">
          <UserCreate />
        </ColorContext.Provider>
      </div>
    </div>
  );
}

export default App;
