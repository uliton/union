import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Accordion } from '../../ui/Accordion';
import { LanguageSelect } from '../../ui/LanguageSelect';

export const Footer = ({ setLanguage }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [currentIndex, setCurrentIndex] = useState(false);

  return (
    <footer className='footer'>
      <div className="footer__accordion">
        {MOCK.footer_content.map((sectionContent, i) => (
          <React.Fragment key={i}>
            <Accordion
              content={sectionContent}
              index={i}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="footer__service">
        <LanguageSelect setLanguage={setLanguage} footer={true} />

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
