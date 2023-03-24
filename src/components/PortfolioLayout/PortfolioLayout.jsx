import React from 'react';
import { Outlet } from 'react-router';
import { PortfolioHead } from '../PortfolioHead/PortfolioHead';

export const PortfolioLayout = () => {
  return (
    <>
      <PortfolioHead />

      <Outlet />
    </>
  );
};
