import React, { useContext } from 'react';
import { Language } from '../../context/Language';

export const LanguageSelect =({ setLanguage }) => {
  const lang = useContext(Language);

  const handlerChange = () => {
    if (lang === 'ru') {
      setLanguage('en')
    }

    if (lang === 'en') {
      setLanguage('ru')
    }
  }

  return (
    <button
      type='button'
      onClick={handlerChange}
    >
      {`Language is ${lang}`}
    </button>
  );
};
