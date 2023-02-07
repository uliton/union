import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../context/Language';

export const Intro = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div className='intro container'>
      <div className="intro__title">
        {MOCK.intro_title}
      </div>

      <div className="intro__description">
        {MOCK.intro_description}
      </div>

      <div className="intro__configurator configurator">
        <button
          type='button'
          className='configurator__button'
        >
          {MOCK.intro_searchButton}
        </button>

        <Link
          to='/'
          className='configurator__link'
        >
          {MOCK.intro_configurator}
        </Link>
      </div>
    </div>
  );
};
