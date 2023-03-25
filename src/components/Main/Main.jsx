import React, { useEffect } from 'react';
import { Header } from '../Header';
import { Intro } from '../Intro';
import { Catalog } from '../Catalog';
import { Catch } from '../Catch';
import { Trends } from '../Trends';
import { Architecture } from '../Architecture';
import { Products } from '../Products';
import { Rooms } from '../Rooms/Rooms';
import { Showroom } from '../Showroom';
import { Utilities } from '../Utilities';
import { Shop } from '../Shop';
import { Design } from '../Design';
import { Subscribe } from '../Subscribe';

export const Main = () => {
  // "document.documentElement.scrollTo" is the magic
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional, to skip the scrolling animation
    });
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <Catalog />
      <Catch />
      <Trends />
      <Architecture />
      <Products />
      <Rooms />
      <Showroom />
      
      {/* <Utilities /> */}

      <Shop />/
      <Design />
      <Subscribe />
    </>
  )
}
