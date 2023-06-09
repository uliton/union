import React, { useContext } from 'react';
import { Image } from '../../../ui/Image';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { getTranslation, Language } from '../../../functions/language';
import './Project.scss';

export const Project0003 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='project container'>
      <Title content={'Black Prince'} />

      <div className='project__content'>
        <Image src='https://ambstone.com/wp-content/uploads/2021/07/photo_2021-07-12_12-38-10.jpg' project={true} />

        <div className="project__description">
          <Description content={'Black Prince erases boundaries of space, visually expands it. The Black color looks very dense, creates a special deep feelings, soothes, absorbs external stimuli. The unique raw material processing technology maximize nature quality of stone image.'} project={true} />

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
      </div>
    </section>
  );
};
