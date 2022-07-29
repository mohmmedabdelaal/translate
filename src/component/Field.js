import React from 'react';
import { useLanguageContext } from '../context/LanguageContext';

const Field = () => {
  const { language } = useLanguageContext();

  const text = language === 'english' ? 'Name' : 'الاسم';
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};

export default Field;
