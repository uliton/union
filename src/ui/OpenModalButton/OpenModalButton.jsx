import classNames from 'classnames';
import React from 'react';

export const OpenModalButton = ({
  content = '',
  onClick = () => {},
  intro = false,
}) => {
  return (
    <button
      type='button'
      className={classNames('openModalButton', {
        'openModalButton--intro': intro,
      })}
      onClick={() => onClick(true)}
    >
      {content}
    </button>
  );
};
