import React, { useState } from 'react';
import UserCreate from './UserCreate';

function App() {
  const [language, setLanguage] = useState('english');
  const onLanguageHandler = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="ui container">
      <div>
        <h2>
          Select Language :
          <i className="flag us" onClick={() => onLanguageHandler('en')} />
          <i className="flag eg" onClick={() => onLanguageHandler('ar')} />
        </h2>
      </div>
      <div>
        <UserCreate />
      </div>
    </div>
  );
}

export default App;
