import React, { useContext } from 'react';
import { getTranslation, Language } from '../../functions/language';
import showroom from '../../images/showroom.jpeg';
import { Title } from '../../ui/Title';
import { Description } from '../../ui/Description';
import { TextLink } from '../../ui/TextLink';

export const Showroom = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='showroom'>
      <div className="container" style={{gridArea: 'title', margin: '0 auto'}}>
        <Title content={MOCK.showroom_title} />
      </div>

      <img
        src={showroom}
        alt={MOCK.showroom_title}
        className='showroom__img'
      />

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
