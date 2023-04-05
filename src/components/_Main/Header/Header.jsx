import React, { useContext } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import min from '../../../videos/min.mp4';

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
        autoPlay
        loop
        muted
        playsInline
        className='header__video'
      >
        <source
          src={min}
          type="video/mp4"
        />
      </video>

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
