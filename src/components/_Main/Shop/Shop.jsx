import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import { Modal } from '../../Modal';
import shop from '../../../images/shop.png';
import { OpenModalButton } from '../../../ui/OpenModalButton';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';

export const Shop = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [modalStatus, setModalStatus] = useState(false);

  // scroll disable
  modalStatus ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  return (
    <section className='shop'>
      <Title content={MOCK.shop_title} />

      <img
        src={shop}
        alt={MOCK.shop_title}
        className='shop__img'
      />

      <div className="container" style={{gridArea: 'description1', margin: '0 auto'}}>
        <Description content={MOCK.shop_description_1} shop={true} />
      </div>

      <div className="container" style={{gridArea: 'description2', margin: '0 auto'}}>
        <Description content={MOCK.shop_description_2} />
      </div>

      <div style={{gridArea: 'button', margin: '0 auto'}}>
        <OpenModalButton
          content={MOCK.shop_button}
          onClick={setModalStatus}
        />
      </div>

      {modalStatus && (
        <Modal
          ident={'Shop Modal'}
          setModalStatus={setModalStatus}
        />
      )}
    </section>
  );
};
