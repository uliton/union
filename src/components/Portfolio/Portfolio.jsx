import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTranslation, Language } from "../../functions/language";
import { getPorfolioFilters } from "../../functions/filters";
import { getProjectsImages } from "../../functions/projects";
import { Button } from "../../ui/Button/Button";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { Image } from "../../ui/Image/Image";

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
        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338405785_545777294326198_2534071340350622236_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rQipbWYFCK0AX_zCxSQ&_nc_ht=scontent-vie1-1.xx&oh=00_AfD3LNO0EoeRC4iZp2SwI3g5BaZ6kz3z4LT4Qk0P78xb4A&oe=64276595" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338516445_1363420494202150_6342306673859707358_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1e587yBnknEAX-Q7a6-&_nc_oc=AQn7f2pkF-58hEvZRgV7TKnCEosrGJn48NUTHc4S16zD21jniynYhWCcKwkEIgQ8K9U&_nc_ht=scontent-vie1-1.xx&oh=00_AfAddgFZWlDbB-uTClDidINI7erzYLFCLndt6uxLmpUw4w&oe=64276756" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338364479_1403440943759204_877922510793434124_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=w9IItBAlQ-sAX_I0GKD&_nc_ht=scontent-vie1-1.xx&oh=00_AfBCeShEnCkm84XPrE8HAVRNymNsuqpDpWb4D2EnI3FwEg&oe=6428A4EE" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338381119_780170109969597_4472704088779879229_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zAS-sMJNhisAX8kxBHf&_nc_ht=scontent-vie1-1.xx&oh=00_AfDgChuZj0oSQbiIrcbnCocxszUeXG66KZVd82LXTKnsnA&oe=642913FD" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338320566_211992348147415_5428687736554281556_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=adb0FFmdJYYAX_JBLOm&_nc_ht=scontent-vie1-1.xx&oh=00_AfBEWwFlX0Np9VKL73N1GZhV_IWPj3doZOMwq1ohjrGo4Q&oe=6429195F" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338509123_2291015741105469_4875458533292349102_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c57HcYTd2nkAX8wx6rQ&_nc_ht=scontent-vie1-1.xx&oh=00_AfDIGTeWLtOq5wDvJy7FJaqrwCMwmrcIKfabnMGaK-6EdA&oe=64291F38" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338407452_600628645440819_3288494809818020446_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ahiP0xSCHZAAX_6WSIF&_nc_oc=AQn7OXDPXXOFIw2uq3xyd9we6rzJRCj-THeBJARtock2vnNrEeYD4jI0izJ3vGrSOzw&_nc_ht=scontent-vie1-1.xx&oh=00_AfAgUgWca1SqePPIRwyC4dkYIH9VTQkANrwgZ5h8pigV0w&oe=6427AC98" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338485775_1277128009887625_5606836632713011295_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8QARShfvVy0AX-HXiJX&_nc_ht=scontent-vie1-1.xx&oh=00_AfCBP9Q9dkkj1S7-xBfXW5ry3amcQMqHIIfKZ44PGeyrcw&oe=6428EC26" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338392921_595483935967299_2767426164825863514_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GnJSYBxkV8cAX8SN2TX&_nc_ht=scontent-vie1-1.xx&oh=00_AfDq4Q-rofrdEH1mhpIVX8yz53dwFbssgC4HY6eMhmbaEw&oe=64274AD1" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338409574_2414477665379306_778446346141026664_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QFg1GHY8eI8AX9z-uRg&_nc_ht=scontent-vie1-1.xx&oh=00_AfA9GqyfYuIYqcf7cfpSOHo9ZRkETiSh_B5tlEhK1MUiSg&oe=6427321F" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338590284_5462634797171974_2404854698392050083_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xoMNYjSQa8cAX97DBhP&_nc_ht=scontent-vie1-1.xx&oh=00_AfBG3wQiNvq20LL7fpt_M3ltJn9Lh2OQilcqXCHCvxm8mg&oe=6428062A" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338564173_237215735352063_1768240806865023706_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gi3e9AND8d8AX9t068D&_nc_ht=scontent-vie1-1.xx&oh=00_AfCfBlmZtumD2GD6MIvjoEXb30yS_2L3JrL3kMTEy17njA&oe=6427B0DA" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338377433_141237935327125_8762469031146746795_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wDALDdpD3b0AX_18zRE&_nc_ht=scontent-vie1-1.xx&oh=00_AfDM-irrdW_847zKa4uKq2jymTECev8lS-sO7HgAE1AH6Q&oe=6427B680" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338381294_763267228523503_6659977099769939653_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lYlOc5e_qYcAX96-Qxb&_nc_ht=scontent-vie1-1.xx&oh=00_AfCs7xADh1y_u3nbi6mM0CJ2rLderATlBnNvbJ_3PN-Ytg&oe=6427DF0F" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338513231_922159119125152_2593878869222214526_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gNVcVpEpP9AAX-yW5x8&_nc_ht=scontent-vie1-1.xx&oh=00_AfAMBBn16HzvLQgBdbwwmqvNjJgq1IwAqK3RuRcd10EJHg&oe=6427F84E" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338413664_763428432053763_1544832845823490564_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Wn_QUTwNx30AX972ADA&_nc_ht=scontent-vie1-1.xx&oh=00_AfCcm_ZDuuzGy8NtSOUDtFhOTeLZUD0juc8vSsauqLzxZA&oe=64288B16" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338425111_236558515410763_6556095844539099897_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aXhXBKbvtSwAX-LSYXu&_nc_ht=scontent-vie1-1.xx&oh=00_AfC7JRZrMZRs1nujOqAYNtNNLjl2Gcopy0WVTNdfG0n8iw&oe=6428352C" projects={true} />

        <Image src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/338414794_5962505683798046_6072312392938756544_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eeGSJeW68z4AX8dAQbF&_nc_ht=scontent-vie1-1.xx&oh=00_AfDE3ICY6TSboyzZEelurJPjjo6SmyGKGFP9YT4OZ3x2xw&oe=6427EC60" projects={true} />



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
