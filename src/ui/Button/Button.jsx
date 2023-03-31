import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  content = '',
  onClick = () => {},
  link,
  imageModal = false,
}) => {
  return (
    <>
      {link
      ? (
        <Link to={link}>
          <button
            type='button'
            className={classNames('button', {
              'button--imageModal': imageModal,
            })}
          >
            {content}
          </button>
        </Link>
      )
      : (
        <button
          type='button'
          className={classNames('button', {
            'button--imageModal': imageModal,
          })}
          onClick={onClick}
        >
          {content}
        </button>
      )}
    </>
  );
};
