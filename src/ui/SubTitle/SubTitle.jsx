import classNames from 'classnames';
import React from 'react';

export const SubTitle = ({
  content = '',
  intro = false,
  // trends = false,
  // architecture = false,
  // rooms = false,
  // utilities = false,
}) => {
  return (
    <div
      className={classNames('sub-title', {
        'sub-title--intro': intro,
        // 'title--trends': trends,
        // 'title--architecture': architecture,
        // 'title--rooms': rooms,
        // 'title--utilities': utilities,
      })}
    >
        {content}
      </div>
  );
};
