import React, { useContext } from 'react';
import { getTranslation, Language } from '../../context/Language';

export const LanguageSelect =({ setLanguage }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

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
      className='languageButton'
      onClick={handlerChange}
    >
      {MOCK.footer_service_language}
    </button>
  );
};
