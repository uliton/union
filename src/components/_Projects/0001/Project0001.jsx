import React, { useContext } from 'react';
import { Intro } from '../../_Main/Intro';
import { Image } from '../../../ui/Image';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { getTranslation, Language } from '../../../functions/language';
import './Project0001.scss';
import { Catch } from '../../_Main/Catch';

export const Project0001 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='project0001'>
      <div className="container">
        <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img project__img--main' />

        <Title content={MOCK.p_0001_title} />

        <div className="project__img-container">
          <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img' />
          <p className="project__img--description">
            {MOCK.p_0001_i_d_1}
          </p>
        </div>

        <Description content={MOCK.p_0001_d_1} project={true} />

        <div className="project__img-container">
          <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img' />
          <p className="project__img--description">
            ---
          </p>
        </div>

        <Description content={MOCK.p_0001_d_2} project={true} />
      </div>

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
            <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img' />
            <p className="project__img--description">
              ---
            </p>
          </div>

          <div className="project__img-container">
            <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img' />
            <p className="project__img--description">
              ---
            </p>
          </div>
        </div>

        <Description content={MOCK.p_0001_d_3} project={true} />

        <div className="project__img-container">
          <img src='https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg' alt="" className='project__img' />
          <p className="project__img--description">
            ---
          </p>
        </div>

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
