import React, { useState } from 'react';
import portfolio from '../../images/bg/portfolio.jpg';
import b1 from '../../images/portfolio_preview/1.jpg';
import l1 from '../../images/portfolio_preview/2.jpg';
import l2 from '../../images/portfolio_preview/3.jpg';
import o1 from '../../images/portfolio_preview/4.jpg';
import d1 from '../../images/portfolio_preview/5.jpg';
import i1 from '../../images/portfolio_preview/6.jpg';
import i2 from '../../images/portfolio_preview/7.jpg';
import i3 from '../../images/portfolio_preview/8.jpg';
import h1 from '../../images/portfolio_preview/9.jpg';
import d2 from '../../images/portfolio_preview/10.jpg';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const filters = [
    'Interior',
    'Dining room',
    'Office',
    'Hall',
    'Bedroom',
    'Living room',
  ];

  const images = [
    {
      name: 'Interior_i1',
      src: i1,
    },
    {
      name: 'Interior_i2',
      src: i2,
    },
    {
      name: 'Interior_i3',
      src: i3,
    },
    {
      name: 'Dining_room_d1',
      src: d2,
    },
    {
      name: 'Dining_room_d2',
      src: d1,
    },
    {
      name: 'Office_o1',
      src: o1,
    },
    {
      name: 'Hall_h1',
      src: h1,
    },
    {
      name: 'Bedroom_b1',
      src: b1,
    },
    {
      name: 'Living_room_l1',
      src: l1,
    },
    {
      name: 'Living_room_l2',
      src: l2,
    },
  ];

  const getFilteredImages = (obj) => {
    if (obj) {
      const filtersArray = []

      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          filtersArray.push(key);
        }
      }

      if (filtersArray.length > 0) {
        let filteredImages = [];

        for (const filter of filtersArray) {
          const arr = images.filter(image => image.name.split('_').slice(0, -1).join(' ') === filter);

          filteredImages = [...filteredImages, ...arr]
        }

        return filteredImages
      }
    }
  }

  const [filteredImages, setFilteredImages] = useState(getFilteredImages() || images);

  const submit = (e) => {
    e.preventDefault();
    const checkedValues = Array.from(e.target.filter).map(el => [
      el.id,
      el.checked
    ]);

    const obj = Object.fromEntries(checkedValues);
    setFilteredImages(getFilteredImages(obj));
  }

  return (
    <main className='portfolio'>
      <form className="portfolio__nav container" onSubmit={submit}>
        <input type="submit" value='Посмотреть' className='portfolio__nav__submit' />
        
        <div className="portfolio__nav__filters">
          {filters.map(filter => (
            <label key={filter}>
              <input type="checkbox" id={filter} name='filter' />
              {filter}
            </label>
          ))}
        </div>
      </form>

      <div className="portfolio__preview">
        {filteredImages.map((img, i) => (
          <Link key={i} to={img.name} className='portfolio__preview__link'>
            <img src={img.src} alt={img.name} className='portfolio__preview__img'/>
          </Link>
        ))}
      </div>
    </main>
  );
};
