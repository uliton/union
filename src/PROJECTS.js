import i_01 from './components/Gallery/imgs/01.jpg';
import i_02 from './components/Gallery/imgs/02.jpg';
import i_03 from './components/Gallery/imgs/03.jpg';
import i_04 from './components/Gallery/imgs/04.jpg';
import i_05 from './components/Gallery/imgs/05.jpg';
import i_06 from './components/Gallery/imgs/06.jpg';
import i_07 from './components/Gallery/imgs/07.jpg';
import i_08 from './components/Gallery/imgs/08.jpg';
import i_09 from './components/Gallery/imgs/09.jpg';
import i_10 from './components/Gallery/imgs/10.jpg';
import i_11 from './components/Gallery/imgs/11.jpg';
import i_12 from './components/Gallery/imgs/12.jpg';
import i_13 from './components/Gallery/imgs/13.jpg';
import i_14 from './components/Gallery/imgs/14.jpg';
import i_15 from './components/Gallery/imgs/15.jpg';
import i_16 from './components/Gallery/imgs/16.jpg';
import i_17 from './components/Gallery/imgs/17.jpg';
import i_18 from './components/Gallery/imgs/18.jpg';

import { getTranslation } from "./functions/language";

export const getProjects = (lang) => {
  const MOCK = getTranslation(lang);

  // console.log(lang);

  const PROJECTS = [
    
    
    
    
    {
      "id": 1,
      "project_id": "0001",
      "project_name": MOCK.p_0001_title,
      "main": true,
      "category": MOCK.p_0001_title,
      "path": "https://ambstone.com/wp-content/uploads/2021/02/Caramel-1.jpg"
    },
    {
      "id": 2,
      "project_id": "0002",
      "project_name": MOCK.p_0002_title,
      "main": true,
      "category": MOCK.p_0002_title,
      "path": "https://ambstone.com/wp-content/uploads/2021/02/honey.jpg"
    },
    {
      "id": 3,
      "project_id": "0003",
      "project_name": MOCK.p_0003_title,
      "main": true,
      "category": MOCK.p_0003_title,
      "path": "https://ambstone.com/wp-content/uploads/2021/07/photo_2021-07-12_12-38-10.jpg"
    },
    {
      "id": 4,
      "project_id": "0004",
      "project_name": MOCK.p_0004_title,
      "main": true,
      "category": MOCK.p_0004_title,
      "path": "https://ambstone.com/wp-content/uploads/2021/07/Gottlieb.jpg"
    },
    {
      "id": 5,
      "project_id": "0005",
      "project_name": MOCK.p_0005_title,
      "main": true,
      "category": MOCK.p_0005_title,
      "path": "https://ambstone.com/wp-content/uploads/2021/07/fantasyMix.jpg"
    },
    {
      "id": 6,
      "project_id": "0006",
      "project_name": MOCK.p_0006_title,
      "main": true,
      "category": MOCK.p_0006_title,
      "path": "https://ambstone.com/wp-content/uploads/2021/07/none.jpg"
    },
    
    // тимчасова тема
    {
      "id": 7,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_01
    },
    {
      "id": 8,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_02
    },
    {
      "id": 9,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_03
    },
    {
      "id": 10,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_04
    },
    {
      "id": 11,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_05
    },
    {
      "id": 12,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_06
    },
    {
      "id": 13,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_07
    },
    {
      "id": 14,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_08
    },
    {
      "id": 15,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_09
    },
    {
      "id": 16,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_10
    },
    {
      "id": 17,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_11
    },
    {
      "id": 18,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_12
    },
    {
      "id": 19,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_13
    },
    {
      "id": 20,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_14
    },
    {
      "id": 21,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_15
    },
    {
      "id": 22,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_16
    },
    {
      "id": 23,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_17
    },
    {
      "id": 24,
      "project_id": "",
      "project_name": "Union Stone",
      "main": true,
      "category": "Union Stone",
      "path": i_18
    },
  ]

  return PROJECTS;
}
