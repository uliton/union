import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Language } from '../../functions/language';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { Menu } from '../Menu/Menu';

export const MainLayout = () => {
  const [language, setLanguage] = useState('en');
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <Language.Provider value={language}>
      <Menu
        isOpen={menuStatus}
        setMenuStatus={setMenuStatus}
        setLanguage={setLanguage}
      />
      <Navigation
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      />

      <Outlet />

      <Footer setLanguage={setLanguage} />
    </Language.Provider>
  );
};
