import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../context/Language';
import { Modal } from '../Modal/Modal';
import { sendMessage, sendMessage2 } from '../../functions/t_mess';

export const Intro = () => {
  const [modalStatus, setModalStatus] = useState(false);
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
        {/* first button */}
        <button
          type='button'
          className='configurator__button'
          onClick={() => sendMessage('Intro Btn1')}
        >
          {MOCK.intro_searchButton1}
        </button>
        
        {/* second button */}
        <button
          type='button'
          className='configurator__button'
          onClick={() => sendMessage2('Intro Btn2')}
        >
          {MOCK.intro_searchButton2}
        </button>

        {/* third button */}
        <button
          type='button'
          className='configurator__button'
          onClick={() => {
            setModalStatus(true);
          }}
        >
          {MOCK.intro_searchButton3}
        </button>

        {modalStatus && (
          <Modal
            ident={'Intro Modal'}
            setModalStatus={setModalStatus}
          />
        )}
      </div>
    </div>
  );
};
