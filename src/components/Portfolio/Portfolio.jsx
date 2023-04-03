import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTranslation, Language } from "../../functions/language";
import { getPorfolioFilters } from "../../functions/filters";
import { getProjectsImages } from "../../functions/projects";
import { Button } from "../../ui/Button/Button";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { Image } from "../../ui/Image/Image";
import i_01 from "../../images/fast/01.jpg";
import i_02 from "../../images/fast/02.jpg";
import i_03 from "../../images/fast/03.jpg";
import i_04 from "../../images/fast/04.jpg";
import i_05 from "../../images/fast/05.jpg";
import i_06 from "../../images/fast/06.jpg";
import i_07 from "../../images/fast/07.jpg";
import i_08 from "../../images/fast/08.jpg";
import i_09 from "../../images/fast/09.jpg";
import i_10 from "../../images/fast/10.jpg";
import i_11 from "../../images/fast/11.jpg";
import i_12 from "../../images/fast/12.jpg";
import i_13 from "../../images/fast/13.jpg";
import i_14 from "../../images/fast/14.jpg";
import i_15 from "../../images/fast/15.jpg";
import i_16 from "../../images/fast/16.jpg";
import i_17 from "../../images/fast/17.jpg";
import i_18 from "../../images/fast/18.jpg";

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
      {/* <div className="portfolio__setings">
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
      </div> */}

      <div className="portfolio__preview">
        <Image src={i_01} projects={true} />

        <Image src={i_02} projects={true} />

        <Image src={i_03} projects={true} />

        <Image src={i_04} projects={true} />

        <Image src={i_05} projects={true} />

        <Image src={i_06} projects={true} />

        <Image src={i_07} projects={true} />

        <Image src={i_08} projects={true} />

        <Image src={i_09} projects={true} />

        <Image src={i_10} projects={true} />

        <Image src={i_11} projects={true} />

        <Image src={i_12} projects={true} />

        <Image src={i_13} projects={true} />

        <Image src={i_14} projects={true} />

        <Image src={i_15} projects={true} />

        <Image src={i_16} projects={true} />

        <Image src={i_17} projects={true} />

        <Image src={i_18} projects={true} />



        {/* {filteredImages.map((img, i) => (
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
        ))} */}

      </div>
    </main>
  );
};
