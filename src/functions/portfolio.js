import { getTranslation } from "./language";


export const getPorfolioFilters = (lang) => {
  const MOCK = getTranslation(lang);

  const filters = MOCK.porfolio_filters;

  return filters;
};


export const getFilteredImages = (images, obj) => {
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

  return images;
}