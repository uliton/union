import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTranslation, Language } from "../../functions/language";
import { getPorfolioFilters } from "../../functions/filters";
import { getProjectsImages } from "../../functions/projects";
import { Button } from "../../ui/Button/Button";
import { Checkbox } from "../../ui/Checkbox/Checkbox";

export const Portfolio = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [filterArray, setFilterArray] = useState([]);
  const [filteredImages, setFilteredImages] = useState(getProjectsImages());

  const filterSubmit = (filter) => {
    if (filterArray.includes(filter)) {
      const newArray = filterArray.filter((f) => f !== filter);

      setFilterArray(newArray);
    } else {
      setFilterArray([...filterArray, filter]);
    }
  };

  useEffect(() => {
    setFilteredImages(getProjectsImages(filterArray));
  }, [filterArray]);

  // "document.documentElement.scrollTo" is the magic
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional, to skip the scrolling animation
    });
  }, []);

  return (
    <main className="portfolio container">
      <div className="portfolio__setings">
        <div className="portfolio__control">
          <Link to="">
            <Button content={MOCK.portfolio_button_projects} />
          </Link>

          <Link to="gallery">
            <Button content={MOCK.portfolio_button_gallery} />
          </Link>
        </div>

        <div className="portfolio__filters">
          {getPorfolioFilters(lang).map((filter, i) => (
            <React.Fragment key={i}>
              <Checkbox filter={filter} filterSubmit={filterSubmit} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="portfolio__preview">
        {filteredImages.map((img, i) => (
          <Link
            key={i}
            to={img.name}
            className="portfolio__preview__link"
            data-conent={img.category}
          >
            <img
              src={img.src}
              alt={img.name}
              className="portfolio__preview--img"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};
