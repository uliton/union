import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import one from '../../images/products/01.png';
import two from '../../images/products/02.png';
import three from '../../images/products/03.png';
import four from '../../images/products/04.png';
import five from '../../images/products/05.png';
import six from '../../images/products/06.png';
import { Modal } from '../Modal/Modal';

export const Products = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [modalStatus, setModalStatus] = useState(false);

  const handlerClick = () => {
    setModalStatus(true);
  }

  return (
    <section className='products'>
      <div className="products__title">
        {MOCK.products_title}
      </div>

      <ul className="products__list">
        {/* one */}
        <li
          className="products__item"
          onClick={handlerClick}
        >
          <div className='products__item__imgBox'>
            <img
              src={one}
              alt={MOCK.products_item_1}
              className='products__item__img'
            />
          </div>

          <p className='products__item__name'>
            {MOCK.products_item_1}
          </p>
        </li>

        {/* two */}
        <li
          className="products__item"
          onClick={handlerClick}
        >
          <div className='products__item__imgBox'>
            <img
              src={two}
              alt={MOCK.products_item_2}
              className='products__item__img'
            />
          </div>

          <p className='products__item__name'>
            {MOCK.products_item_2}
          </p>
        </li>

        {/* three */}
        <li
          className="products__item"
          onClick={handlerClick}
        >
          <div className='products__item__imgBox'>
            <img
              src={three}
              alt={MOCK.products_item_3}
              className='products__item__img'
            />
          </div>

          <p className='products__item__name'>
            {MOCK.products_item_3}
          </p>
        </li>

        {/* four */}
        <li
          className="products__item"
          onClick={handlerClick}
        >
          <div className='products__item__imgBox'>
            <img
              src={four}
              alt={MOCK.products_item_4}
              className='products__item__img'
            />
          </div>

          <p className='products__item__name'>
            {MOCK.products_item_4}
          </p>
        </li>

        {/* five */}
        <li
          className="products__item"
          onClick={handlerClick}
        >
          <div className='products__item__imgBox'>
            <img
              src={five}
              alt={MOCK.products_item_5}
              className='products__item__img'
            />
          </div>

          <p className='products__item__name'>
            {MOCK.products_item_5}
          </p>
        </li>

        {/* six */}
        <li
          className="products__item"
          onClick={handlerClick}
        >
          <div className='products__item__imgBox'>
            <img
              src={six}
              alt={MOCK.products_item_6}
              className='products__item__img'
            />
          </div>

          <p className='products__item__name'>
            {MOCK.products_item_6}
          </p>
        </li>
      </ul>

      {modalStatus && (
        <Modal
          ident={'Products'}
          setModalStatus={setModalStatus}
        />
      )}
    </section>
  );
};
