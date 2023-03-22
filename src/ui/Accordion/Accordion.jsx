import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getLink } from '../../functions/links';
import { Fb } from '../../images/icons/Fb';
import { Insta } from '../../images/icons/Insta';
import { Twitter } from '../../images/icons/Twitter';
import { Youtube } from '../../images/icons/Youtube/Youtube';
import { Paypal } from '../../images/icons/Paypal/Paypal';

export const Accordion = ({ content, index, currentIndex, setCurrentIndex }) => {
  const [opened, setOpened] = useState(false);

  const neededImage = (img) => {
    switch (img) {
      case 'fb':
        return <Fb />;
      case 'insta':
        return <Insta />;
      case 'twitter':
        return <Twitter />;
      case 'youtube':
        return <Youtube />;
      case 'payment_systems': // не та картинка
        return <Paypal />;
      // case 'paypal':
      //   return <Paypal />;
      default:
        return '';
    }
  }

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    if (windowSize[0] < 768) {
      setOpened(() => false);
    }

    if (windowSize[0] >= 768) {
      setOpened(() => true);
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  const toggle = (i) => {
    if (i !== currentIndex) {
      return setCurrentIndex(i);
    }

    if (i === currentIndex) {
      return setCurrentIndex(false);
    }
  };

  return (
    <div className='accordion'>
      <button
        type="button"
        className={classNames('accordion__title', {
          'accordion__title--open': index === currentIndex,
        })}
        onClick={() => toggle(index)}
      >
        {content.title}
      </button>

      <span>
        {content.links && content.links.length > 0 && (
          <ul className={classNames('accordion__list', {
            'accordion__list--open': index === currentIndex || opened
          })}>
            {content.links.map((name, i) => (
              <li key={i} className='accordion__item'>
                <a
                  href={getLink(index, i)}
                  rel="noreferrer"
                  // target='_blank'
                  className='accordion__link'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </span>

      {content.images && content.images.length > 0 && (
        <ul className={classNames('accordion__list', 'accordion__img-list', {
          'accordion__list--open': index === currentIndex || opened
        })}>
          {content.images.map((img, i) => (
            <li key={i} className='accordion__item'>
              <a
                href={getLink(index, i).link}
                rel="noreferrer"
                target={getLink(index, i).target}
              >
                {neededImage(img)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
