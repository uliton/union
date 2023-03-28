import React, { useContext } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import min from '../../../videos/min.mp4';
// import max from '../../videos/max.mp4';

export const Header = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  // const [renderVideo, setRenderVideo] = useState(min);

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setRenderVideo(min);
  //   }

  //   if (window.innerWidth >= 768) {
  //     setRenderVideo(max);
  //   }
  // }, []);

  return (
    <section className='header' id='header'>
      <video
        type='video/mp4'
        src={min}
        className='header__video'
        preload="auto"
        autoPlay
        loop
        playsInline
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
    </section>
  );
};
