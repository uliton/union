import classNames from 'classnames';
import React from 'react';

export const Title = ({ content, intro, trends, architecture, rooms }) => {
  return (
    <div
      className={classNames('title', {
        'title--intro': intro,
        'title--trends': trends,
        'title--architecture': architecture,
        'title--rooms': rooms,
      })}
    >
        {content}
      </div>
  );
};
