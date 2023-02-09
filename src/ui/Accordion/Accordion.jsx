import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export const Accordion = ({ title, content, index }) => {
  const [selected, setSelected] = useState(null);

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
        <p>
          select
        </p>
      </button>

      <ul className={classNames('accordion__list', {
        'accordion__list--show': selected
      })}>
        <li className='accordion__item'>Lorem, ipsum dolor.</li>
        <li className='accordion__item'>Laudantium, perspiciatis? Assumenda!</li>
        <li className='accordion__item'>Alias, natus sunt.</li>
        <li className='accordion__item'>Eaque, dicta soluta!</li>
        <li className='accordion__item'>Provident, odit ducimus.</li>
        <li className='accordion__item'>Obcaecati, excepturi labore.</li>
        <li className='accordion__item'>Temporibus, ducimus ab.</li>
      </ul>
    </section>
  );
};
