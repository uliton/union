import React, { useContext } from 'react';
import { Image } from '../../../ui/Image';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { getTranslation, Language } from '../../../functions/language';
import './Project.scss';

export const Project0007 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='project container'>
      <img src="https://www.studia-54.com/upload/iblock/a33/r1h0uydcd1xxnrfpzxco51a7m8u5rm2p/080000_got.jpg" alt="" className='project__img project__img--main' />

      <Title content={'Villa Amani in South Africa'} />

      <div className="project__img-container">
        <img src="https://www.studia-54.com/upload/iblock/a33/r1h0uydcd1xxnrfpzxco51a7m8u5rm2p/080000_got.jpg" alt="" className='project__img' />
        <p className="project__img--description">
          Villa is located on the west coast of South Africa at Pearl Bay Beach
        </p>
      </div>
      

      <Description content="The villa by the ocean in South Africa has a charming name, Amani, which translates as peace, freedom and unity. The configuration of the architecture is closely related to the topography of the site - the house has a long, narrow plan, and a series of outdoor pools and meditation areas unfold in front of it. The rooms are filled with a sufficient amount of natural light and provided with natural ventilation. We've furnished the back courtyard with several terraces and gazebos for the hosts to comfortably and diversely spend time with friends - the thriving valley provides beautiful views of the green landscape. The mild climate, abundance of sunshine and clean coastal air formed the ideal conditions for the construction of a stunning private residence." project={true} />

      <div className="project__img-container">
        <img src="https://www.studia-54.com/upload/medialibrary/b5e/oaqsf9e2h56njy76ipdwlr29m4u8gbj2/05.jpg" alt="" className='project__img' />
        <p className="project__img--description">
          A series of outdoor pools and meditation areas unfold in front of the house
        </p>
      </div>

      <Description content="This project was ordered by a couple from the United States, who dreamed of a tropical vacation home. Our architectural style has been reinterpreted by choosing abasi wood as the key material for the facades. Well aware of modern trends in the world of architecture, the clients ordered a sculptural building with panoramic windows, clean horizontal lines and a spacious interior, as well as massive awnings to naturally cool the house." project={true} />

      <div className="project__img-container">
        <img src="https://www.studia-54.com/upload/medialibrary/e4b/ea6wm191dcwmwppytsfnlllw6zvreblz/09.jpg" alt="" className='project__img' />
        <p className="project__img--description">
          Open terrace with hearth from which you can walk into the house and find yourself in the formal dining room
        </p>
      </div>

      <Description content="On the first floor there is a social area with a chic fireplace, an original cantilevered staircase made of redwood that leads to the second floor to the master suites. From here you have an amazing view of Table Mountain and the water. Guest rooms are located on the first floor and have access to the interior garden. In the basement there are rough rooms, storage, underground garage. The roof of the first floor smoothly passes into the terrace, where you can sunbathe or arrange a large-scale disco. That is why the appearance of the house has some minor references to the style of the bungalow, but it looks modern and monumental." project={true} />

      <div className="flex-box">
        <div className="project__img-container">
          <img src="https://www.studia-54.com/upload/medialibrary/ca5/d0sigwdmaak0yz3jx1rt17jp8nqu9bpb/07.jpg" alt="" className='project__img' />
          <p className="project__img--description">
            Lounge area by the water. Having a large pool close to the house is a real luxury
          </p>
        </div>

        <div className="project__img-container">
          <img src="https://www.studia-54.com/upload/medialibrary/41c/vrw46pngr6b0dtsy0uusv6owxfkbesue/13.jpg" alt="" className='project__img' />
          <p className="project__img--description">
            Secluded backyard garden for walks and barbecues
          </p>
        </div>
      </div>

      <Description content="This dream home is just made for an active family: it shows a lot of interesting solutions. Unusual architecture and unique landscape guarantee that the time spent here will be unforgettable!" project={true} />

      <div className="project__img-container">
        <img src="https://www.studia-54.com/upload/medialibrary/edf/b8dryzk0hm2o17xhp3enxi7h8l2s9j9o/12_got2.jpg" alt="" className='project__img' />
        <p className="project__img--description">
          Ethnic style terrace. Wooden plates are laid out decking of the veranda: it perfectly heats up in the sun and gives back its heat for a long time
        </p>
      </div>

      <Description content="The more compact patio is under an enclosed canopy, and the most magnificent terrace with a large seating area from the outdoor Minotti 2022 collection is arranged under a pergola. Here the inhabitants of the house can fully experience the beauty of local nature and well-groomed yard area." project={true} />

      <div className="project__img-container">
        <img src="https://www.studia-54.com/upload/medialibrary/74e/ezvsw712o31d3x56htevsiw7ar32zfaa/10.jpg" alt="" className='project__img' />
        <p className="project__img--description">
          Lounge area with a fire pit under the pergola
        </p>
      </div>

      <Description content="The architectural solutions from Studia 54 around the world are a combination of years of experience with a wide variety of regions, a meticulous approach to detail, high professionalism and the work of an entire architectural team. The uniqueness of the projects ensures the real liquidity of the architecture and the growth of its value over time. From conceptual design to turnkey construction, we create a new way of life and your personal world." project={true} />

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
