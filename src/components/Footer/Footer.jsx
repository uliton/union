import React from 'react';
import { LanguageSelect } from '../../ui/LanguageSelect/LanguageSelect';

export const Footer = ({ setLanguage }) => {
  return (
    <footer className='footer'>
      <div className="footer__service">
        <LanguageSelect setLanguage={setLanguage} />

        <button>
          Д
        </button>
      </div>

    </footer>
  );
};
