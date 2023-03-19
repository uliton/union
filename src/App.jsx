import React, { useState } from 'react';
import { Language } from './functions/language';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Catalog } from './components/Catalog/Catalog';
import { Catch } from './components/Catch';
import { Trends } from './components/Trends';
import { Products } from './components/Products';
import { Utilities } from './components/Utilities';
import { Shop } from './components/Shop';
import { Design } from './components/Design';
import { Subscribe } from './components/Subscribe';
import { Footer } from './components/Footer';

// import { Advertising } from './components/Advertising';
// import { About } from './components/About';
// import { Contacts } from './components/Contacts';

export const App = () => {
  const [language, setLanguage] = useState('ru');

  return (
    <div className='app'>
      <Language.Provider value={language}>
        <Navigation />
        <Header />
        <Intro />
        <Catalog />
        <Catch />
        <Trends />
        <Products />
        <Utilities />
        <Shop />
        <Design />
        <Subscribe />
        {/* <Advertising /> */}
        {/* <About /> */}
        {/* <Contacts /> */}
        <Footer setLanguage={setLanguage} />
      </Language.Provider>
    </div>
  );
};
