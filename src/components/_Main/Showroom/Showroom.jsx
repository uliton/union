import React, { useContext } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { TextLink } from '../../../ui/TextLink';
// import showroom from './showroom.jpeg';
// import { Image } from '../../../ui/Image/Image';
import video from './showroom.mp4';

export const Showroom = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='showroom container'>
      <div className="container" style={{gridArea: 'title', margin: '0 auto'}}>
        <Title content={MOCK.showroom_title} />
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className='showroom__video'
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      {/* <img
        src={showroom}
        alt={MOCK.showroom_title}
        className='showroom__img'
      /> */}

      <div className="container" style={{gridArea: 'description', margin: '0 auto'}}>
        <Description content={MOCK.showroom_description} />
      </div>

      <div className="container" style={{gridArea: 'link', margin: '0 auto'}}>
        <span style={{width: 'min-content'}}>
          <TextLink path='portfolio' content={MOCK.showroom_link} showroom={true} />
        </span>
      </div>
    </section>
  );
};
