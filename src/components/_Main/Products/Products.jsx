import React, { useContext } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import one from '../../../images/products/01.png';
import two from '../../../images/products/02.png';
import three from '../../../images/products/03.png';
import four from '../../../images/products/04.png';
import five from '../../../images/products/05.png';
import six from '../../../images/products/06.png';
import { TextLink } from '../../../ui/TextLink';
import { Title } from '../../../ui/Title';

export const Products = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='products'>
      <Title content={MOCK.products_title} />

      <ul className="products__list">
        {/* one */}
        <li className="products__item">
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

          <TextLink path='portfolio' content={MOCK.products_link} />
        </li>

        {/* two */}
        <li className="products__item">
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

          <TextLink path='portfolio' content={MOCK.products_link} />
        </li>

        {/* three */}
        <li className="products__item">
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

          <TextLink path='portfolio' content={MOCK.products_link} />
        </li>

        {/* four */}
        <li className="products__item">
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

          <TextLink path='portfolio' content={MOCK.products_link} />
        </li>

        {/* five */}
        <li className="products__item">
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

          <TextLink path='portfolio' content={MOCK.products_link} />
        </li>

        {/* six */}
        <li className="products__item">
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

          <TextLink path='portfolio' content={MOCK.products_link} />
        </li>
      </ul>
    </section>
  );
};
