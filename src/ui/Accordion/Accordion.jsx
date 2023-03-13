import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import fb from '../../images/icons/fb.svg';
import insta from '../../images/icons/insta.svg';
import twitter from '../../images/icons/twitter.svg';
import youtube from '../../images/icons/youtube.svg';
// import payment_systems from '../../images/icons/payment_systems.svg';
import paypal from '../../images/icons/paypal.svg';
import arrow from '../../images/icons/arrow.svg';

export const Accordion = ({ content, index }) => {
  const [selected, setSelected] = useState(null);

  const neededImage = (innerDirectory) => {
    console.log(innerDirectory, fb);
    if (innerDirectory === fb) {
      return fb;
    }
    if (innerDirectory === insta) {
      return insta;
    }
    if (innerDirectory === twitter) {
      return twitter;
    }
    if (innerDirectory === youtube) {
      return youtube;
    }
    if (innerDirectory === paypal) {
      return paypal;
    }
    if (innerDirectory === arrow) {
      return arrow;
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSelected(true)
    }
  }, [window.innerWidth])

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };




  return (
    <section className='accordion'>
      <button
        type="button"
        className={classNames('accordion__title', {
          'accordion__title--open': selected
        })}
        onClick={() => toggle(index)}
      >
        {content.title}
      </button>

      <span>
        {content.links.length && (
          <ul className={classNames('accordion__list', {
            'accordion__list--show': selected
          })}>
            {content.links.map((link, i) => (
              <li key={i} className='accordion__item'>
                <a href={link.url} rel="noreferrer" target='_blank'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </span>

      
        {content.images.length && (
          <ul className={classNames('accordion__list', {
            'accordion__list--show': selected
          })}>
            {content.images.map((link, i) => (
              <li key={i} className='accordion__item'>
                <a
                  href={link.url}
                  rel="noreferrer"
                  target='_blank'
                  style={{
                    width: '15px',
                    height: '15px',
                    backgroundImage: `url(../../images/icons/${neededImage(link.directory)}.svg)`
                  }}
                >
                  
                </a>
              </li>
            ))}
          </ul>
        )}
      <p className='test'>

      </p>
    </section>
  );
};
