import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import { Modal } from '../../Modal';
import { OpenModalButton } from '../../../ui/OpenModalButton';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';

export const Intro = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='intro container'>
      <Title content={MOCK.intro_title} intro={true} />

      <Description content={MOCK.intro_description} />

      <div className="intro__configurator">
        {/* first button */}
        <OpenModalButton
          content={MOCK.intro_button_1}
          onClick={setModalStatus}
        />

        {/* second button */}
        <OpenModalButton
          content={MOCK.intro_button_2}
          onClick={setModalStatus}
        />

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
