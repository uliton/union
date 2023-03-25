import classNames from 'classnames';
import React from 'react';

export const Title = ({
  content = '',
  intro = false,
  trends = false,
  architecture = false,
  rooms = false,
  utilities = false,
}) => {
  return (
    <div
      className={classNames('title', {
        'title--intro': intro,
        'title--trends': trends,
        'title--architecture': architecture,
        'title--rooms': rooms,
        'title--utilities': utilities,
      })}
    >
        {content}
      </div>
  );
};
