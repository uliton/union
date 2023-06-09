import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../../functions/language';
import residence from '../../../images/trends/residence.jpg';
import industry from '../../../images/trends/industry.jpg';
import architecture from '../../../images/trends/architecture.jpg';
import projects from '../../../images/trends/projects.jpg';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';

export const Trends = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='trends'>
      <div className="trends__info container">
        <Title content={MOCK.trends_title} trends={true} />

        <Description content={MOCK.trends_description} noParagraph={true} />
      </div>

      <ul className="trends__list">
        <li className="trends__item">
          <Link to="/" className='trends__item--link'>
            <div className='trends__item--imgBox' >
              <img
                src={residence}
                alt={MOCK.trends_item_1}
                className='trends__item--img'
              />
            </div>

            <p className='trends__item--name'>
              {MOCK.trends_item_1}
            </p>
          </Link>
        </li>

        <li className="trends__item">
          <Link to="/" className='trends__item--link'>
            <div className='trends__item--imgBox'>
              <img
                src={industry}
                alt={MOCK.trends_item_2}
                className='trends__item--img'
              />
            </div>

            <p className='trends__item--name'>
              {MOCK.trends_item_2}
            </p>
          </Link>
        </li>

        <li className="trends__item">
          <Link to="/" className='trends__item--link'>
            <div className='trends__item--imgBox'>
              <img
                src={architecture}
                alt={MOCK.trends_item_3}
                className='trends__item--img'
              />
            </div>

            <p className='trends__item--name'>
              {MOCK.trends_item_3}
            </p>
          </Link>
        </li>

        <li className="trends__item">
          <Link to="/" className='trends__item--link'>
            <div className='trends__item--imgBox'>
              <img
                src={projects}
                alt={MOCK.trends_item_4}
                className='trends__item--img'
              />
            </div>

            <p className='trends__item--name'>
              {MOCK.trends_item_4}
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};
