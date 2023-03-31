import React, { useContext, useEffect, useState } from "react";
import { getTranslation, Language } from "../../functions/language";
import { getGalleryFilters } from "../../functions/filters";
import { getGalleryImages } from "../../functions/projects";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { Image } from "../../ui/Image";

export const Gallery = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [filterArray, setFilterArray] = useState([]);
  const [filteredImages, setFilteredImages] = useState(getGalleryImages());

  const filterSubmit = (filter) => {
    if (filterArray.includes(filter)) {
      const newArray = filterArray.filter((f) => f !== filter);

      setFilterArray(newArray);
    } else {
      setFilterArray([...filterArray, filter]);
    }
  };

  useEffect(() => {
    setFilteredImages(getGalleryImages(filterArray));
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
    <main className="gallery container">
      <div className="gallery__setings">
        <div className="gallery__control">
          <Button content={MOCK.portfolio_button_projects} link={"/portfolio"} />


          <Button content={MOCK.portfolio_button_gallery} />
        </div>

        <div className="gallery__filters">
          {getGalleryFilters(lang).map((filter, i) => (
            <React.Fragment key={i}>
              <Checkbox filter={filter} filterSubmit={filterSubmit} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="gallery__preview">
        {filteredImages.map(img => (
          <React.Fragment key={img.id}>
            <Image
              name={img.category}
              src={img.path}
              gallery={true}
              project_id={img.project_id}
            />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};
