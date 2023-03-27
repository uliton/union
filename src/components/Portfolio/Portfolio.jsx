import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTranslation, Language } from '../../functions/language';
import { getFilteredImages, getPorfolioFilters } from '../../functions/portfolio';
import { Button } from '../../ui/Button/Button';
import { getProjectsImages } from '../../functions/portfolio_projects';

export const Portfolio = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  // const { filter } = useParams();
  // console.log(filter);

  // "document.documentElement.scrollTo" is the magic
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional, to skip the scrolling animation
    });
  }, []);

  const images = getProjectsImages();

  const [filteredImages, setFilteredImages] = useState(images);
  // const [filteredImages, setFilteredImages] = useState(getFilteredImages(images) || images);

  // const submit = (e) => {
  //   e.preventDefault();
  //   const checkedValues = Array.from(e.target.filter).map(el => [
  //     el.id,
  //     el.checked
  //   ]);

  //   const obj = Object.fromEntries(checkedValues);
  //   setFilteredImages(getFilteredImages(images, obj));
  // }

  return (
    <main className='portfolio container'>
      <div className="portfolio__setings">
        <div className="portfolio__control">
          <Link to=''>
            <Button content={MOCK.portfolio_button_projects} />
          </Link>

          <Link to='gallery'>
            <Button content={MOCK.portfolio_button_gallery} />
          </Link>
        </div>

        <div className="portfolio__filters">
          {getPorfolioFilters(lang).map(filter => (
            <label key={filter}>
              <input type="checkbox" id={filter} name='filter' />
              {filter}
            </label>
          ))}
        </div>
      </div>

      {/* <form className="portfolio__filters " onSubmit={submit}>
        <input type="submit" value={MOCK.portfolio_filter_submit} className='portfolio__filters__submit' />
        
      </form> */}

      <div className="portfolio__preview">
        {filteredImages.map((img, i) => (
          <Link
            key={i}
            to={img.name}
            className='portfolio__preview__link'
          >
            <img src={img.src} alt={img.name} className='portfolio__preview--img'/>
          </Link>
        ))}
      </div>
    </main>
  );
};
