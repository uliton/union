import React from 'react';
// import { Language } from './functions/language';
// import { Navigation } from './components/Navigation';
// import { Header } from './components/Header';
// import { Intro } from './components/Intro';
// import { Catalog } from './components/Catalog';
// import { Catch } from './components/Catch';
// import { Trends } from './components/Trends';
// import { Architecture } from './components/Architecture';
// import { Products } from './components/Products';
// import { Showroom } from './components/Showroom';
// import { Utilities } from './components/Utilities';
// import { Shop } from './components/Shop';
// import { Design } from './components/Design';
// import { Subscribe } from './components/Subscribe';
// import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Main } from './components/Main/Main';
import { NotFound } from './components/NotFound';

export const App = () => {
  // const [language, setLanguage] = useState('en');

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>


    // <div className='app'>
    //   <Language.Provider value={language}>
    //     <Navigation />
    //     <Header />
    //     <Intro />
    //     <Catalog />
    //     <Catch />
    //     <Trends />
    //     <Architecture />
    //     <Products />
    //     {/* 1 */}
    //     <Showroom />

    //     <Utilities />

    //     <Shop />
    //     <Design />
    //     <Subscribe />
    //     <Footer setLanguage={setLanguage} />
    //   </Language.Provider>
    // </div>
  );
};
