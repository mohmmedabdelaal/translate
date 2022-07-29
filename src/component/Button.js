import React from 'react';
import ColorContext from '../context/ColorContext';
import { useLanguageContext } from '../context/LanguageContext';

const Button = () => {
  const { language } = useLanguageContext();
  console.log(language);
  const renderSubmit = (value) => {
    return value === 'english' ? 'submit' : 'تاكيد';
  };
  const renderBtn = (color) => {
    return (
      <button className={`ui button ${color}`}>
        {/* <LanguageContext.Consumer>
          {(value) => renderSubmit(value)}
        </LanguageContext.Consumer> */}
        {renderSubmit(language)}
      </button>
    );
  };

  return (
    <ColorContext.Consumer>{(color) => renderBtn(color)}</ColorContext.Consumer>
  );
};

export default Button;
