import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Language } from '../../functions/language';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

export const MainLayout = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Language.Provider value={language}>
        <Navigation />

        <Outlet />

        <Footer setLanguage={setLanguage} />
      </Language.Provider>
  );
};
