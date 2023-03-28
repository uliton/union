import classNames from 'classnames';
import React from 'react';
import './Video.scss';

export const Video = ({
  link,
  name = 'Union Stone',
  test = false,
}) => {
  return (
    <div
      className={classNames('video-container', {
        'video-container--test': test,
      })}
    >
      <video
        type='video/mp4'
        src={link}
        className='video-container__video'
        preload="auto"
        autoPlay
        loop
        playsInline
        muted
        title={name}
      ></video>
    </div>
  );
};
