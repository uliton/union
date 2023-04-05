import React, { useEffect } from 'react';
import { Header } from '../_Main/Header';
import { Intro } from '../_Main/Intro';
import { Catalog } from '../Catalog';
import { Catch } from '../_Main/Catch';
import { Trends } from '../_Main/Trends';
import { Architecture } from '../_Main/Architecture';
import { Products } from '../_Main/Products';
import { Rooms } from '../_Main/Rooms';
import { Showroom } from '../_Main/Showroom';
import { Utilities } from '../Utilities';
import { Shop } from '../_Main/Shop';
import { Design } from '../_Main/Design';
import { Subscribe } from '../_Main/Subscribe';
import { Gallery } from '../Gallery';

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
      <Header /> {}
      <Intro /> {}
      <Catalog />
      {/* <Catch /> {} */}
      {/* <Trends /> {} */}
      <Gallery />
      <Architecture /> {}
      <Products /> {}
      <Rooms /> {}
      <Showroom /> {}
      
      {/* <Utilities /> */}

      {/* <Shop /> {} */}
      {/* <Design /> {} */}
      <Subscribe /> {}
    </>
  )
}
