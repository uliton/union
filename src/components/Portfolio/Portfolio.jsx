import React, { useContext, useEffect, useState } from "react";
import { getTranslation, Language } from "../../functions/language";
import { getPorfolioFilters } from "../../functions/filters";
import { getProjectsImages } from "../../functions/projects";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { Image } from "../../ui/Image";

export const Portfolio = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [filterArray, setFilterArray] = useState([]);
  const [filteredImages, setFilteredImages] = useState(getProjectsImages(lang));

  const filterSubmit = (filter) => {
    if (filterArray.includes(filter)) {
      const newArray = filterArray.filter((f) => f !== filter);

      setFilterArray(newArray);
    } else {
      setFilterArray([...filterArray, filter]);
    }
  };

  useEffect(() => {
    setFilteredImages(getProjectsImages(lang, filterArray));
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
      {/* <div className="portfolio__setings">
        <div className="portfolio__control">
          <Button content={MOCK.portfolio_button_projects}/>

          <Button content={MOCK.portfolio_button_gallery} link={"gallery"} />
        </div>

        <div className="portfolio__filters">
          {getPorfolioFilters(lang).map((filter, i) => (
            <React.Fragment key={i}>
              <Checkbox filter={filter} filterSubmit={filterSubmit} />
            </React.Fragment>
          ))}
        </div>
      </div> */}

      <div className="portfolio__preview">
        {filteredImages.map(img => (
          <React.Fragment key={img.id}>
            <Image
              // link={img.project_id}
              link=" "
              name={img.project_name}
              src={img.path}
              projects={true}
            />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};
