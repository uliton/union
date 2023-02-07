import React, { useContext } from 'react';
import { getTranslation, Language } from '../../context/Language';
import river from '../../images/river.avif';
import cave from '../../images/cave.avif';
import sea from '../../images/sea.avif';

export const About = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div className='about container'>
      <div className='about__foreword'>
        {MOCK.about_foreword}
      </div>

      <div className='about__first story'>
        <img src={river} alt='river' className='story__image' />

        <p className='story__title'>
          {MOCK.about_first_story_title}
        </p>
        <p className='story__website'>
          {MOCK.about_story_website}
        </p>
      </div>

      <div className="story__flex">
        <div className='about__second'>
          <img src={cave} alt='cave' className='story__image' />

          <p className='story__title'>
            {MOCK.about_second_story_title}
          </p>
          <p className='story__website'>
            {MOCK.about_story_website}
          </p>
        </div>

        <div className='about__third'>
          <img src={sea} alt='sea' className='story__image' />

          <p className='story__title'>
            {MOCK.about_third_story_title}
          </p>
          <p className='story__website'>
            {MOCK.about_story_website}
          </p>
        </div>
      </div>
    </div>
  );
};
