import React, { useEffect, useState } from 'react';
import { Carousel } from '../../ui/Carousel';

// import first from '../../images/carousel/first.jpg'
// import second from '../../images/carousel/second.jpg'
// import third from '../../images/carousel/third.jpg'
// import fourth from '../../images/carousel/fourth.jpg'
// import fifth from '../../images/carousel/fifth.jpg'
// import sixth from '../../images/carousel/sixth.jpg'
// import seventh from '../../images/carousel/seventh.jpg'
// import eighth from '../../images/carousel/eighth.jpg'
// import ninth from '../../images/carousel/ninth.jpg'
// import tenth from '../../images/carousel/tenth.jpg'
// import eleventh from '../../images/carousel/eleventh.jpg'
// import twelfth from '../../images/carousel/twelfth.jpg'
import i_01 from '../../images/carousel/01.jpg'
import i_02 from '../../images/carousel/02.jpg'
import i_03 from '../../images/carousel/03.jpg'
import i_04 from '../../images/carousel/04.jpg'
import i_05 from '../../images/carousel/05.jpg'
import i_06 from '../../images/carousel/06.jpg'

export const Catalog = () => {
  const [imageCounte, setImageCounte] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const images = [
    {
      src: i_01,
      link: 'portfolio/0001',
      text: 'Caramel',
    },{
      src: i_02,
      link: 'portfolio/0002',
      text: 'Honey Fantasy',
    },{
      src: i_03,
      link: 'portfolio/0003',
      text: 'Black Prince',
    },{
      src: i_04,
      link: 'portfolio/0004',
      text: 'Gottlieb',
    },{
      src: i_05,
      link: 'portfolio/0005',
      text: 'Fantasy Mix',
    },{
      src: i_06,
      link: 'portfolio/0006',
      text: 'Royal Fantasy',
    },
    // {
    //   src: seventh,
    //   link: 'portfolio'
    // },{
    //   src: eighth,
    //   link: 'portfolio'
    // },{
    //   src: ninth,
    //   link: 'portfolio'
    // },{
    //   src: tenth,
    //   link: 'portfolio'
    // },{
    //   src: eleventh,
    //   link: 'portfolio'
    // },{
    //   src: twelfth,
    //   link: 'portfolio'
    // }
  ]

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  const mobile = 420;
  const tablet = 768;
  const desktop = 1280;

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    if (windowSize < mobile) {
      setImageCounte(() => 1);
    }

    if (windowSize >= mobile && windowSize < tablet) {
      setImageCounte(() => 2);
    }

    if (windowSize >= tablet && windowSize < desktop) {
      setImageCounte(() => 3);
    }

    if (windowSize >= desktop) {
      setImageCounte(() => 4);
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  return (
    <section className='catalog'>
      <Carousel
        imageCounte={imageCounte}
        images={images}
      />
    </section>
  );
};
