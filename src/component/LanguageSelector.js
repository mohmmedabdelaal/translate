import React from 'react';

function LanguageSelector({ onLanguageChange }) {
  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => onLanguageChange('english')} />
      <i className="flag eg" onClick={() => onLanguageChange('arabic')} />
    </div>
  );
}

export default LanguageSelector;
