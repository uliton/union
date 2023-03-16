import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { getLink } from '../../functions/links';
import { Fb } from '../../images/icons/Fb';
import { Insta } from '../../images/icons/Insta';
import { Twitter } from '../../images/icons/Twitter';
import { Youtube } from '../../images/icons/Youtube/Youtube';
import { Paypal } from '../../images/icons/Paypal/Paypal';
import arrow from '../../images/icons/arrow.svg';

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

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOpened(false);
    }

    if (window.innerWidth >= 768) {
      setOpened(true);
    }
  }, [window.innerWidth])

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
                href={getLink(index, i)}
                rel="noreferrer"
                // target='_blank'
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
