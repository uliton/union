import React, { useContext } from 'react';
import { getTranslation, Language } from '../../context/Language';
import video from '../../videos/ns_amb_stone_360.mp4';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <header className='header'>
      <Navigation />

      <video
        type='video/mp4'
        src={video}
        className='header__video'
        preload="auto"
        autoPlay
        loop
        playsInline
        muted
      ></video>

      <div className="header__text">
        <div className="header__title">
          {MOCK.header_title}
        </div>

        <div className="header__subtitle">
          {MOCK.header_subtitle}
        </div>
      </div>

      <div className="header__arrow"></div>
    </header>
  );
};
