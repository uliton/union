import React from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from './components/MainLayout';
import { Main } from './components/Main';
import { NotFound } from './components/NotFound';
import { Portfolio } from './components/Portfolio';
import { PortfolioLayout } from './components/PortfolioLayout';
import { Gallery } from './components/Gallery';
import { About } from './components/_AboutUs/About';
import { Project0001 } from './components/_Projects/0001/Project0001';
import { Project0002 } from './components/_Projects/0002/Project0002';
import { Project0003 } from './components/_Projects/0003/Project0003';
import { Project0004 } from './components/_Projects/0004/Project0004';
import { Project0005 } from './components/_Projects/0005/Project0005';
import { Project0006 } from './components/_Projects/0006/Project0006';
import { Test } from './components/_test/Test';
// import { Project0007 } from './components/_Projects/0007';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='portfolio' element={<PortfolioLayout />}>
            <Route index element={<Portfolio />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='0001' element={<Project0001 />} />
            <Route path='0002' element={<Project0002 />} />
            <Route path='0003' element={<Project0003 />} />
            <Route path='0004' element={<Project0004 />} />
            <Route path='0005' element={<Project0005 />} />
            <Route path='0006' element={<Project0006 />} />
            {/* <Route path='0007' element={<Project0007 />} /> */}
          </Route>
          <Route path='about' element={<About />} />
          <Route path='test' element={<Test />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
};
