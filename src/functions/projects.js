// import p_1 from '../images/projects_main/p_1.jpeg';
// import p_2 from '../images/projects_main/p_2.jpeg';
// import p_3 from '../images/projects_main/p_3.jpeg';
// import p_4 from '../images/projects_main/p_4.jpeg';
// import p_5 from '../images/projects_main/p_5.jpeg';
// import p_6 from '../images/projects_main/p_6.jpeg';
// import p_7 from '../images/projects_main/p_7.jpeg';
// import p_8 from '../images/projects_main/p_8.jpeg';
// import p_9 from '../images/projects_main/p_9.jpeg';
// import p_10 from '../images/projects_main/p_10.jpeg';
// import p_11 from '../images/projects_main/p_11.jpeg';
// import p_12 from '../images/projects_main/p_12.jpeg';
// import p_13 from '../images/projects_main/p_13.jpeg';
// import p_14 from '../images/projects_main/p_14.jpeg';
// import p_15 from '../images/projects_main/p_15.jpeg';
// import p_16 from '../images/projects_main/p_16.jpeg';
// import p_17 from '../images/projects_main/p_17.jpeg';
// import p_18 from '../images/projects_main/p_18.jpeg';
// import p_19 from '../images/projects_main/p_19.jpeg';
// import p_20 from '../images/projects_main/p_20.jpeg';
// import p_21 from '../images/projects_main/p_21.jpeg';
// import p_22 from '../images/projects_main/p_22.jpeg';
// import p_23 from '../images/projects_main/p_23.jpeg';
// import p_24 from '../images/projects_main/p_24.jpeg';

import PROJECTS from '../PROJECTS.json';

// const PROJECTS_IMAGES = [
//   {
//     id: 1,
//     name: '0001',
//     src: p_1,
//     category: 'Unique stylistics',
//   },
//   {
//     id: 2,
//     name: '0002',
//     src: p_2,
//     category: 'Unique stylistics',
//   },
//   {
//     id: 3,
//     name: '0003',
//     src: p_3,
//     category: 'Unique stylistics',
//   },
//   {
//     id: 4,
//     name: '0004',
//     src: p_4,
//     category: 'Unique stylistics',
//   },
//   {
//     id: 5,
//     name: '0001',
//     src: p_5,
//     category: 'Residential interiors',
//   },
//   {
//     id: 6,
//     name: '0002',
//     src: p_6,
//     category: 'Residential interiors',
//   },
//   {
//     id: 7,
//     name: '0003',
//     src: p_7,
//     category: 'Residential interiors',
//   },
//   {
//     id: 8,
//     name: '0004',
//     src: p_8,
//     category: 'Residential interiors',
//   },
//   {
//     id: 9,
//     name: '0001',
//     src: p_9,
//     category: 'Residential interiors',
//   },
//   {
//     id: 10,
//     name: '0002',
//     src: p_10,
//     category: 'Residential interiors',
//   },
//   {
//     id: 11,
//     name: '0003',
//     src: p_11,
//     category: 'Residential interiors',
//   },
//   {
//     id: 12,
//     name: '0004',
//     src: p_12,
//     category: 'Residential interiors',
//   },
//   {
//     id: 13,
//     name: '0001',
//     src: p_13,
//     category: 'Architectural design',
//   },
//   {
//     id: 14,
//     name: '0002',
//     src: p_14,
//     category: 'Architectural design',
//   },
//   {
//     id: 15,
//     name: '0003',
//     src: p_15,
//     category: 'Architectural design',
//   },
//   {
//     id: 16,
//     name: '0004',
//     src: p_16,
//     category: 'Architectural design',
//   },
//   {
//     id: 17,
//     name: '0001',
//     src: p_17,
//     category: 'Architectural design',
//   },
//   {
//     id: 18,
//     name: '0002',
//     src: p_18,
//     category: 'Architectural design',
//   },
//   {
//     id: 19,
//     name: '0003',
//     src: p_19,
//     category: 'Project of the season',
//   },
//   {
//     id: 20,
//     name: '0004',
//     src: p_20,
//     category: 'Project of the season',
//   },
//   {
//     id: 21,
//     name: '0001',
//     src: p_21,
//     category: 'Project of the season',
//   },
//   {
//     id: 22,
//     name: '0002',
//     src: p_22,
//     category: 'Project of the season',
//   },
//   {
//     id: 23,
//     name: '0003',
//     src: p_23,
//     category: 'Project of the season',
//   },
//   {
//     id: 24,
//     name: '0004',
//     src: p_24,
//     category: 'Project of the season',
//   },
// ]

export const getProjectsImages = (filterArray = []) => {
  if (filterArray.length) {
    let newArray = [];

    
    for (const filter of filterArray) {
      const array = PROJECTS.filter(image => image.project_name === filter);
      newArray = [...newArray, ...array];
    }
    
    // console.log(newArray)
    const newRanderArray = newArray.sort((a, b) => a.category.localeCompare(b.category));

    return newRanderArray;
  }

  const mainImagesArray = PROJECTS.filter(image => image.main);

  const randerArray = mainImagesArray.sort((a, b) => a.project_name.localeCompare(b.project_name));

  return randerArray;
}

