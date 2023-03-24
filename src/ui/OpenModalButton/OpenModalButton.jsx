import React from 'react';

export const OpenModalButton = ({ content, onClick }) => {
  return (
    <button
      type='button'
      className='openModalButton'
      onClick={() => onClick(true)}
    >
      {content}
    </button>
  );
};
