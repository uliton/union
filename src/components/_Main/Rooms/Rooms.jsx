import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../../functions/language';
import { ArrowL } from '../../../images/icons/ArrowL/ArrowL';
import { ArrowR } from '../../../images/icons/ArrowR';
import { Description } from '../../../ui/Description';
import { Title } from '../../../ui/Title';

export const Rooms = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  const carouselArray = [
    {
      title: MOCK.rooms_title_1,
      description: MOCK.rooms_description_1,
      anim_bnt: MOCK.rooms_anim_btn_1,
      path: '/',
    },
    {
      title: MOCK.rooms_title_2,
      description: MOCK.rooms_description_2,
      anim_bnt: MOCK.rooms_anim_btn_2,
      path: '/',
    },
    {
      title: MOCK.rooms_title_3,
      description: MOCK.rooms_description_3,
      anim_bnt: MOCK.rooms_anim_btn_3,
      path: '/',
    },
    {
      title: MOCK.rooms_title_4,
      description: MOCK.rooms_description_4,
      anim_bnt: MOCK.rooms_anim_btn_4,
      path: '/',
    },
  ]
  const [displayImage, setDisplayImage] = useState(-1);

  const handlerClickPrev = () => {
    if (displayImage < 0) {
      setDisplayImage(prev => prev + 1);
    }
  };

  const handlerClickNext = () => {
    if (displayImage > -3) {
      setDisplayImage(prev => prev - 1);
    }
  };

  return (
    <section className='rooms'>
      <ul
        className='rooms__list'
        style={{
          transform: `translateX(calc(50% - (var(--itemWidth) / 2) - var(--pad) + (var(--itemWidth) + var(--pad) * 2) * ${displayImage}))`
        }}
      >
        {/* left side carousel */}
        {/* {leftCarouselArrayStatus && (
          leftCarouselArray.map((item, i) => (
            <li key={i} className='rooms__item'>
              <h1>
                test
              </h1>
              <Link to={item.path} className='rooms__link'>
                <Title content={item.title} rooms={true} />
  
                <Description content={item.description} rooms={true} />
  
                <span className='rooms__anim-btn'>
                  <span className='rooms__anim-btn--text'>
                    {item.anim_bnt}
                  </span>
                  <span className='rooms__anim-btn--box' data-content={item.anim_bnt}></span>
                </span>
              </Link>
            </li>
          ))
        )} */}


        {/* right side carousel */}
        {carouselArray.map((item, i) => (
          <li key={i} className='rooms__item'>
            <Link to={item.path} className='rooms__link'>
              <Title content={item.title} rooms={true} />

              <Description content={item.description} rooms={true} />

              <span className='rooms__anim-btn'>
                <span className='rooms__anim-btn--text'>
                  {item.anim_bnt}
                </span>
                <span className='rooms__anim-btn--box' data-content={item.anim_bnt}></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type='button'
        className='rooms__button rooms__button--left'
        onClick={handlerClickPrev}
      >
        <ArrowL />
      </button>

      <button
        type='button'
        className='rooms__button rooms__button--right'
        onClick={handlerClickNext}
      >
        <ArrowR />
      </button>
    </section>
  );
};
