import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Modal } from '../Modal';
import design from '../../images/design.png';
import { OpenModalButton } from '../../ui/OpenModalButton';
import { Title } from '../../ui/Title';
import { Description } from '../../ui/Description';

export const Design = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='design'>
      <Title content={MOCK.design_title} />

      <img
        src={design}
        alt={MOCK.design_title}
        className='design__img'
      />

      <div className="container" style={{margin: '0 auto'}}>
        <Description content={MOCK.design_description} />
      </div>

      <OpenModalButton
        content={MOCK.design_button}
        onClick={setModalStatus}
      />

      {modalStatus && (
        <Modal
          ident={'Design Modal'}
          setModalStatus={setModalStatus}
        />
      )}
    </section>
  );
};
