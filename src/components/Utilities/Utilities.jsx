import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Modal } from '../Modal/Modal';

export const Utilities = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='utilities container'>
      <div className="utilities__title">
        {MOCK.utilities_title}
      </div>

      {/* <div className="utilities__description">
        {MOCK.utilities_description}
      </div> */}

      <div className="utilities__configurator">
        {/* first button */}
        <button
          type='button'
          className='utilities__configurator__button'
          onClick={() => {
            setModalStatus(true);
          }}
        >
          {MOCK.utilities_button_1}
        </button>
        
        {/* second button */}
        <button
          type='button'
          className='utilities__configurator__button'
          onClick={() => {
            setModalStatus(true);
          }}
        >
          {MOCK.utilities_button_2}
        </button>

        {/* third button */}
        <button
          type='button'
          className='utilities__configurator__button'
          onClick={() => {
            setModalStatus(true);
          }}
        >
          {MOCK.utilities_button_3}
        </button>

        {modalStatus && (
          <Modal
            ident={'Utilities Modal'}
            setModalStatus={setModalStatus}
          />
        )}
      </div>
    </section>
  );
};
