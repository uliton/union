import React from 'react';
import MOCK from '../MOCK.json';

export const Language = React.createContext('en');

export const getTranslation = (lang) => {
  return MOCK[lang]
};
