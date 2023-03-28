import React from 'react';

export const Ru = ({ onChange }) => {
  const lang = 'ru';
  const handleClick = () => {
    onChange(lang);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 256 256"
      className='ru'
      onClick={handleClick}
    >
      <g
        className='ru__G'
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path
          className='ru__P ru__P--1'
          d="M 2.571 30 l 84.859 0 C 81.254 12.534 64.611 0.015 45.034 0 l -0.068 0 C 25.389 0.015 8.745 12.534 2.571 30 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          className='ru__P ru__P--2'
          d="M 87.429 60 L 2.571 60 C 8.75 77.476 25.408 90 45 90 S 81.25 77.476 87.429 60 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          className='ru__P ru__P--3'
          d="M 87.429 60 C 89.088 55.307 90 50.261 90 45 c 0 -5.261 -0.911 -10.307 -2.571 -15 L 2.571 30 C 0.911 34.693 0 39.739 0 45 c 0 5.261 0.912 10.308 2.571 15 L 87.429 60 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
