import React from 'react';
import classNames from 'classnames';

export const Description = ({
  content = '',
  noParagraph = false,
  architecture = false,
  shop = false,
  rooms = false,
  project = false,
  about = false,
}) => {
  return (
    <div className={classNames('description', {
      'description--noParagraph': noParagraph,
      'description--architecture': architecture,
      'description--shop': shop,
      'description--rooms': rooms,
      'description--project': project,
      'description--about': about,
    })}>
      {content}
    </div>
  );
};
