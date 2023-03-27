import React from 'react';

export const Button = ({ content }) => {
  return (
    <button
      type='button'
      className='button'
      // onClick={() => onClick(true)}
    >
      {content}
    </button>
  );
};
