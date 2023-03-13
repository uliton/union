import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../context/Language';
// import video from '../../videos/ns_amb_stone_360.mp4';


export const Advertising = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div className='advertising'>
      {/* <video
        className='advertising__video'
        loop
        autoPlay
        muted
        >
        <source
          src={video}
          type='video/mp4'
        />
      </video> */}

      <div className="advertising__content advContent">
        <div className="advContent__foreword">
          {MOCK.advertising_foreword}
        </div>

        <div className="advContent__title">
          {MOCK.advertising_title}
        </div>

        <Link to="/" className='advContent__button'>
          {MOCK.advertising_button}
        </Link>
      </div>
    </div>
  );
};
