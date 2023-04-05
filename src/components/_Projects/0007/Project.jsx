import React, { useContext } from 'react';
// import { Image } from '../../../ui/Image';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { getTranslation, Language } from '../../../functions/language';
import './Project.scss';
import { Catch } from '../../_Main/Catch';
import i_01 from './imgs/01.jpg';
import i_02 from './imgs/02.jpg';
import i_03 from './imgs/03.jpg';
import i_04 from './imgs/04.jpg';

export const Project0007 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='project container'>
      <img src={i_01} alt="" className='project__img project__img--main' />

      <Title content={'Villa Amani in South Africa'} />

      <div className="project__img-container">
        <img src={i_01} alt="" className='project__img' />
        <p className="project__img--description">
          {MOCK.p_0007_i_d_1}
        </p>
      </div>
      

      <Description content={MOCK.p_0007_d_1} project={true} />

      <div className="project__img-container">
        <img src={i_04} alt="" className='project__img' />
        <p className="project__img--description">
          A series of outdoor pools and meditation areas unfold in front of the house
        </p>
      </div>

      <Description content={MOCK.p_0007_d_2} project={true} />

      <div className="project__img-container">
        <img src={i_03} alt="" className='project__img' />
        <p className="project__img--description">
          Open terrace with hearth from which you can walk into the house and find yourself in the formal dining room
        </p>
      </div>

      <Description content={MOCK.p_0007_d_3} project={true} />

      <div className="project__flex-box">
        <div className="project__img-container">
          <img src={i_02} alt="" className='project__img' />
          <p className="project__img--description">
            Lounge area by the water. Having a large pool close to the house is a real luxury
          </p>
        </div>

        <div className="project__img-container">
          <img src={i_02} alt="" className='project__img' />
          <p className="project__img--description">
            Secluded backyard garden for walks and barbecues
          </p>
        </div>
      </div>

      <Description content="This dream home is just made for an active family: it shows a lot of interesting solutions. Unusual architecture and unique landscape guarantee that the time spent here will be unforgettable!" project={true} />

      <div className="project__img-container">
        <img src={i_04} alt="" className='project__img' />
        <p className="project__img--description">
          Ethnic style terrace. Wooden plates are laid out decking of the veranda: it perfectly heats up in the sun and gives back its heat for a long time
        </p>
      </div>

      <Description content="The more compact patio is under an enclosed canopy, and the most magnificent terrace with a large seating area from the outdoor Minotti 2022 collection is arranged under a pergola. Here the inhabitants of the house can fully experience the beauty of local nature and well-groomed yard area." project={true} />

      <div className="project__img-container">
        <img src={i_03} alt="" className='project__img' />
        <p className="project__img--description">
          Lounge area with a fire pit under the pergola
        </p>
      </div>

      <Description content="The architectural solutions from Studia 54 around the world are a combination of years of experience with a wide variety of regions, a meticulous approach to detail, high professionalism and the work of an entire architectural team. The uniqueness of the projects ensures the real liquidity of the architecture and the growth of its value over time. From conceptual design to turnkey construction, we create a new way of life and your personal world." project={true} />

      <br />

      <div className='project__details details'>
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

      <br />

      <Catch />

      {/* <div className='project__content'>
        <Image src='https://ambstone.com/wp-content/uploads/2021/07/none.jpg' project={true} />

        <div className="project__description">
          <Description content={'One of the most valuable product in our line. Made from selected raw materials of gem-quality manual cleaning. The structure of the product conveys solidity of natural stone. Uniqueness and uniqueness of the pattern, rich orange color that turns into white with smoky clouds tones.'} project={true} />

          <div className='project__details details'>
            <div className="details__container">
              <div className="details__title">
                Size chart:
              </div>

              <div className="details__container__wrapper">
                <div>
                  <div className="details__subcontainer">
                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel:
                      </p>

                      <p className="details__subcontent">
                        2.4 m (7’10”) * 1.2 m (3’11”)
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Thickness:
                      </p>

                      <p className="details__subcontent">
                        18 mm
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel net weight:
                      </p>

                      <p className="details__subcontent">
                        54-56 kg (119.05 – 123.459 Ibs)
                      </p>
                    </div>
                  </div>

                  <div className="details__subcontainer">
                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel:
                      </p>

                      <p className="details__subcontent">
                        1.2 m (7’10”) * 0.6 m (1’12”)
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Thickness:
                      </p>

                      <p className="details__subcontent">
                        18 mm
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel net weight:
                      </p>

                      <p className="details__subcontent">
                        13.49-14 kg (29.74 – 30.86 Ibs)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="details__subcontainer">
                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel:
                      </p>

                      <p className="details__subcontent">
                        0.6 m (1’12”) * 0.3 m (0’98”)
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Thickness:
                      </p>

                      <p className="details__subcontent">
                        18 mm
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel net weight:
                      </p>

                      <p className="details__subcontent">
                        3.37-3.5 kg (7.43 – 7.72 Ibs)
                      </p>
                    </div>
                  </div>

                  <div className="details__subcontainer">
                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel:
                      </p>

                      <p className="details__subcontent">
                        0.5 m (1’8″) * 0.5 m (1’8”)
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Thickness:
                      </p>

                      <p className="details__subcontent">
                        18 mm
                      </p>
                    </div>

                    <div className="details__subcontainer__line">
                      <p className="details__subtitle">
                        Panel net weight:
                      </p>

                      <p className="details__subcontent">
                        4.68-4.86 kg (10.32 – 10.71 Ibs)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details__wrapper">
              <div className="details__container">
                <div className="details__title">
                  Material:
                </div>
                
                <div className="details__content">
                  Amber
                </div>
              </div>

              <div className="details__container">
                <div className="details__title">
                  Country origin:
                </div>
                
                <div className="details__content">
                  Ukraine
                </div>
              </div>
            </div>

            <div className="details__container">
              <div className="details__title">
                Applications:
              </div>
              
              <div className="details__content">
                Kitchen space, living room, bathroom, pools, saunas, hammam, bar, cinema, hotel lobby, flights of stairs, floors, building facades
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
