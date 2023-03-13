import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../context/Language';
import residence from '../../images/trends/residence.jpg';
import industry from '../../images/trends/industry.jpg';
import architecture from '../../images/trends/architecture.jpg';
import projects from '../../images/trends/projects.jpg';

export const Trends = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div className='trends'>
      <div className="trends__info">
        <div className="trends__info--title">
          {MOCK.trends_title}
        </div>

        <div className='trends__info--description'>
          {MOCK.trends_description}
        </div>
      </div>

      <ul className="trends__list">
        <li className="trends__item">
          <Link to="/" className='trends__item--link'>
            <div className='trends__item--imgBox'>
              <img
                src={residence}
                alt="residence"
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
                alt="residence"
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
                alt="residence"
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
                alt="residence"
                className='trends__item--img'
              />
            </div>

            <p className='trends__item--name'>
              {MOCK.trends_item_4}
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
