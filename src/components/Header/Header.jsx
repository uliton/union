import React, { useContext, useEffect, useState } from 'react';
import { getTranslation, Language } from '../../context/Language';
import min from '../../videos/min.mp4';
import max from '../../videos/max.mp4';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [renderVideo, setRenderVideo] = useState(min);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setRenderVideo(min);
    }

    if (window.innerWidth >= 768) {
      setRenderVideo(max);
    }
  }, []);

  return (
    <header className='header'>
      <Navigation />

      <video
        type='video/mp4'
        src={renderVideo}
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
