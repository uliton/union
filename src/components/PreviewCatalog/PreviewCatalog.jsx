import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductPreview } from '../ProductPreview';
import { getTranslation, Language } from '../../context/Language';

export const PreviewCatalog = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  const catalog = [0,1,2];

  // console.log(Carousel);

  return (
    <div className='catalog'>
      <div className="catalog__info">
        <div className="catalog__info--title">
          {`${MOCK.catalog_info} –`}
        </div>

        <Link
          to='/'
          className='catalog__info--link'
        >
          {MOCK.catalog_link}
        </Link>
      </div>

      <div className="catalog__list">
        CAROUSEL
      </div>
    </div>
  );
};
