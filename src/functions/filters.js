import { getTranslation } from "./language";

// porfolio filters
export const getPorfolioFilters = (lang) => {
  const MOCK = getTranslation(lang);

  const filters = MOCK.porfolio_filters;

  return filters;
};

// gallery filters
export const getPorfolioGalleryFilters = (lang) => {
  const MOCK = getTranslation(lang);

  const filters = MOCK.porfolio_gallery_filters;

  return filters;
};
