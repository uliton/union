import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Description } from '../../ui/Description';
import { OpenModalButton } from '../../ui/OpenModalButton/OpenModalButton';
import { Title } from '../../ui/Title';
import { Modal } from '../Modal/Modal';

export const Utilities = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='utilities container'>
      <Title content={MOCK.utilities_title} />

      {/* <Description content={MOCK.utilities_description}/> */}

      <div className="utilities__configurator">
        {/* first button */}
        <OpenModalButton
          content={MOCK.utilities_button_1}
          onClick={setModalStatus}
        />

        {/* second button */}
        <OpenModalButton
          content={MOCK.utilities_button_2}
          onClick={setModalStatus}
        />

        {/* third button */}
        <OpenModalButton
          content={MOCK.utilities_button_3}
          onClick={setModalStatus}
        />

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
