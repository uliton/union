import React from 'react';
import { Accordion } from '../../ui/Accordion/Accordion';
import { LanguageSelect } from '../../ui/LanguageSelect/LanguageSelect';

export const Footer = ({ setLanguage }) => {

  const content = {}

  return (
    <footer className='footer'>
      <div className="footer__accordion">
        <Accordion content={content} index={'1'} />
        <Accordion content={content} index={'1'} />
      </div>

      <div className="footer__service">
        <LanguageSelect setLanguage={setLanguage} />

        <span className='footer__service__creater'>
          <p>
            Created by
          </p>
          
          <a
            href="https://uliton.github.io/CV/"
            rel="noreferrer"
            target="_blank"
          >
            Uliton
          </a>
        </span>
      </div>
    </footer>
  );
};
