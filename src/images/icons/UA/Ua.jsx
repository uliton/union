import React from 'react';

export const Ua = ({ onChange }) => {
  const lang = 'ua';
  const handleClick = () => {
    onChange(lang);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 256 256"
      className='ua'
      onClick={handleClick}
    >
      <g
        className='ua__G'
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path
          className='ua__P ua__P--1'
          d="M 45 90 C 20.147 90 0 69.853 0 45 h 90 C 90 69.853 69.853 90 45 90 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          className='ua__P ua__P--2'
          d="M 45 0 C 20.147 0 0 20.147 0 45 h 90 C 90 20.147 69.853 0 45 0 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
