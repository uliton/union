import React from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from './components/MainLayout';
import { Main } from './components/Main';
import { NotFound } from './components/NotFound';
import { Portfolio } from './components/Portfolio';
import { PortfolioLayout } from './components/PortfolioLayout';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Project0001 } from './components/_Projects/0001/Project';
import { Project0002 } from './components/_Projects/0002';
import { Project0003 } from './components/_Projects/0003';
import { Project0004 } from './components/_Projects/0004';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='portfolio' element={<PortfolioLayout />}>
            <Route index element={<Portfolio />} />
            <Route path='gallery' element={<PortfolioGallery />} />
            <Route path='0001' element={<Project0001 />} />
            <Route path='0002' element={<Project0002 />} />
            <Route path='0003' element={<Project0003 />} />
            <Route path='0004' element={<Project0004 />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
};
