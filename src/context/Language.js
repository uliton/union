import React from 'react';
import MOCK from '../MOCK.json';

export const Language = React.createContext('ru');

export const getTranslation = (lang) => {
  return MOCK[lang]
}