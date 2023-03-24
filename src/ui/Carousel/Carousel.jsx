import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Carousel = ({ imageCounte, images }) => {
  const [shift, setShift] = useState(0);

  const renderArray = () => {
    const arr = [...images];

    for (let i = 0; i < shift; i++) {
      arr.push(images[i]);
      arr.shift();
    }

    return arr.slice(0, imageCounte);
  }

  const goToNextSlide = () => {
    if (shift + 2 > images.length) {
      setShift(() => 0);

      return;
    }

    setShift(prev => prev + 1);
  };

  const goToPrevSlide = () => {
    if (shift === 0) {
      setShift(() => images.length - 1);

      return;
    }

    setShift(prev => prev - 1);
  };

  return (
    <div className='carousel'>
      <ul
        className='carousel__list'
      >
        {renderArray().map((image, i) => (
          <li key={i} className='carousel__item'>
            <Link to={image.link}>
              <div className='carousel__item--imgBox'>
                <img
                  src={image.src}
                  alt={i}
                  className='carousel__item--img'
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="carousel__button carousel__button--left"
        onClick={goToPrevSlide}
      >
      </button>

      <button
        type="button"
        className="carousel__button carousel__button--right"
        onClick={goToNextSlide}
      >
      </button>
    </div>
  );
};

