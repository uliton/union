import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

export const TextLink = ({
  content,
  path = '/',
  architecture = false,
  showroom = false,
  notFound = false,
}) => {
  return (
    <Link to={path} className='link'>
      <p
        className={classNames('link__text', {
          'link__text--architecture': architecture,
          'link__text--showroom': showroom,
          'link__text--not-found': notFound,
        })}
      >
        {content}
      </p>
    </Link>
  );
};
