import React from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from './components/MainLayout';
import { Main } from './components/Main';
import { NotFound } from './components/NotFound';
import { Portfolio } from './components/Portfolio';
import { PortfolioLayout } from './components/PortfolioLayout';
import { PortfolioRoom } from './components/PortfolioRoom';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='portfolio' element={<PortfolioLayout />}>
            <Route index element={<Portfolio />} />
            {/* <Route path=':filter' element={<Portfolio />} /> */}
            <Route path='gallery' element={<PortfolioRoom />} />
            <Route path='1234' element={<PortfolioRoom />} />
            {/* <Route path=':category' element={<PortfolioRoom />} /> */}
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
};
