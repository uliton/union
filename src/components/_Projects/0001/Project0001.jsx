import React, { useContext, useEffect } from 'react';
// import { Intro } from '../../_Main/Intro';
// import { Image } from '../../../ui/Image';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { getTranslation, Language } from '../../../functions/language';
import { Catch } from '../../_Main/Catch';
import i_01 from '../../../images/bg/portfolio.jpg';
import i_02 from './imgs/02.jpg';
import i_03 from './imgs/03.jpg';
import i_04 from './imgs/04.jpg';
import i_05 from './imgs/05.jpg';
// const past = 'https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg';

export const Project0001 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  // "document.documentElement.scrollTo" is the magic
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional, to skip the scrolling animation
    });
  }, []);

  return (
    <section className='project'>
      <div className="container">
        <img src={i_01} alt="" className='project__img project__img--main' />

        <Title content={MOCK.p_0001_title} />

        <div className="project__img-container">
          <img src={i_02} alt="" className='project__img' />
          <p className="project__img--description">
            {MOCK.p_0001_i_d_1}
          </p>
        </div>

        <Description content={MOCK.p_0001_d_1} project={true} />

        <div className="project__img-container">
          <img src={i_03} alt="" className='project__img' />
          <p className="project__img--description">
            
          </p>
        </div>

        <Description content={MOCK.p_0001_d_2} project={true} />
      </div>

      {/* green line */}
      <div className='project__details details'>
        <div className='container'>
          <div className="details__container">
            <div className="details__title">
              {MOCK.project_details_title_1}
            </div>

            <div className="details__container__wrapper">
              <div>
                <div className="details__subcontainer">
                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_1}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_p1}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_2}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_t}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_3}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_w1}
                    </p>
                  </div>
                </div>

                <div className="details__subcontainer">
                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_1}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_p2}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_2}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_t}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_3}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_w2}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="details__subcontainer">
                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_1}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_p3}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_2}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_t}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_3}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_w3}
                    </p>
                  </div>
                </div>

                <div className="details__subcontainer">
                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_1}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_p4}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_2}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_t}
                    </p>
                  </div>

                  <div className="details__subcontainer__line">
                    <p className="details__subtitle">
                      {MOCK.project_details_subtitle_3}
                    </p>

                    <p className="details__subcontent">
                      {MOCK.project_details_subcontent_w4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="details__wrapper">
            <div className="details__container">
              <div className="details__title">
                {MOCK.project_details_title_2}
              </div>
              
              <div className="details__content">
                {MOCK.project_details_description_1}
              </div>
            </div>

            <div className="details__container">
              <div className="details__title">
                {MOCK.project_details_title_3}
              </div>
              
              <div className="details__content">
                {MOCK.project_details_description_2}
              </div>
            </div>
          </div>

          <div className="details__container">
            <div className="details__title">
              {MOCK.project_details_title_4}
            </div>
            
            <div className="details__content">
              {MOCK.project_details_description_3}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project__flex-box">
          <div className="project__img-container">
            <img src={i_04} alt="" className='project__img' />
            <p className="project__img--description">
              
            </p>
          </div>

          <div className="project__img-container">
            <img src={i_05} alt="" className='project__img' />
            <p className="project__img--description">
              
            </p>
          </div>
        </div>

        <Description content={MOCK.p_0001_d_3} project={true} />

        <div className="project__video">
          <iframe
            src="https://www.youtube.com/embed/KVdeADkiDmI?autoplay=1&mute=1&loop=1&playlist=KVdeADkiDmI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className='project__video'
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video> */}
        {/* <div className="project__img-container">
          <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img' />
          <p className="project__img--description">
            
          </p>
        </div> */}

        <Description content={MOCK.p_0001_d_4} project={true} />
      </div>

      <Catch />

      {/* <div className='project__content'>
        <Image src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' project={true} link=' ' />

        <div className="project__description">
          <Description content={MOCK.p_0001_description} project={true} />

        </div>
      </div> */}
    </section>
  );
};
