import React, { useState } from 'react';
import { About } from './components/About';
import { Advertising } from './components/Advertising';
import { Catch } from './components/Catch/Catch';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Trends } from './components/Trends';
import { Language } from './context/Language';

export const App = () => {
  const [language, setLanguage] = useState('ru');

  return (
    <div className='app'>
      <Language.Provider value={language}>
        <Header />
        <Intro />
        <Trends />
        <Catch />
        {/* <Advertising /> */}
        {/* <About /> */}
        {/* <Contacts /> */}
        {/* <Footer setLanguage={setLanguage} /> */}
      </Language.Provider>

    </div>
  );
};
