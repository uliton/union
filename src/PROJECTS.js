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
    }
  ]
  
  return PROJECTS;
}
