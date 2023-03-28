import React from 'react';
import defaultImg from './img.png';
import './Image.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Image = ({
  src = defaultImg,
  link = '',
  name = 'Union Stone',
  test = false,
  projects = false,
}) => {
  return (
    <div
      className={classNames('image-container', {
        'image-container--test': test,
        'image-container--projects': projects,

      })}
    >
      <Link to={link} className={classNames('image-container__link', {
        'image-container__link--projects': projects,
      })}>
        <img
          src={src}
          alt={name}
          title={name}
          className='image-container__img'
        />
      </Link>
    </div>
  );
};
