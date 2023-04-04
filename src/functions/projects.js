import { getProjects } from "../PROJECTS";


// projects
export const getProjectsImages = (lang, filterArray = []) => {
  if (filterArray.length) {
    let newArray = [];

    
    for (const filter of filterArray) {
      const array = getProjects(lang).filter(image => image.project_name === filter);
      newArray = [...newArray, ...array];
    }

    const newRanderArray = newArray.sort((a, b) => a.project_name.localeCompare(b.project_name));

    return newRanderArray;
  }

  const mainImagesArray = getProjects(lang).filter(image => image.main);

  const randerArray = mainImagesArray.sort((a, b) => a.project_name.localeCompare(b.project_name));

  return randerArray;
}


// gallery
export const getGalleryImages = (lang, filterArray = []) => {
  if (filterArray.length) {
    let newArray = [];

    for (const filter of filterArray) {
      const array = getProjects(lang).filter(image => image.category === filter.toLowerCase().split(' ').join('_'));
      newArray = [...newArray, ...array];
    }

    const newRanderArray = newArray.sort((a, b) => a.category.localeCompare(b.category));

    return newRanderArray;
  }

  const randerArray = getProjects(lang).sort((a, b) => a.category.localeCompare(b.category));

  return randerArray;
}