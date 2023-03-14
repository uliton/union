import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../context/Language';
import { Modal } from '../Modal/Modal';
import { sendMessage } from '../../functions/t_mess';

export const Intro = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='intro container'>
      <div className="intro__title">
        {MOCK.intro_title}
      </div>

      <div className="intro__description">
        {MOCK.intro_description}
      </div>

      <div className="intro__configurator">
        {/* first button */}
        <button
          type='button'
          className='intro__configurator__button'
          onClick={() => sendMessage('Intro Btn1')}
        >
          {MOCK.intro_button_1}
        </button>
        
        {/* second button */}
        <button
          type='button'
          className='intro__configurator__button'
          onClick={() => {
            setModalStatus(true);
          }}
        >
          {MOCK.intro_button_2}
        </button>

        {/* third button */}
        <button
          type='button'
          className='intro__configurator__button'
          onClick={() => {
            setModalStatus(true);
          }}
        >
          {MOCK.intro_button_3}
        </button>

        {modalStatus && (
          <Modal
            ident={'Intro Modal'}
            setModalStatus={setModalStatus}
          />
        )}
      </div>
    </section>
  );
};
