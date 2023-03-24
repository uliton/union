import React, { useEffect, useState } from 'react';
import { Carousel } from '../../ui/Carousel';

import first from '../../images/carousel/first.jpg'
import second from '../../images/carousel/second.jpg'
import third from '../../images/carousel/third.jpg'
import fourth from '../../images/carousel/fourth.jpg'
import fifth from '../../images/carousel/fifth.jpg'
import sixth from '../../images/carousel/sixth.jpg'
import seventh from '../../images/carousel/seventh.jpg'
import eighth from '../../images/carousel/eighth.jpg'
import ninth from '../../images/carousel/ninth.jpg'
import tenth from '../../images/carousel/tenth.jpg'
import eleventh from '../../images/carousel/eleventh.jpg'
import twelfth from '../../images/carousel/twelfth.jpg'

export const Catalog = () => {
  const [imageCounte, setImageCounte] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const images = [
    {
      src: first,
      link: '/'
    },{
      src: second,
      link: '/'
    },{
      src: third,
      link: '/'
    },{
      src: fourth,
      link: '/'
    },{
      src: fifth,
      link: '/'
    },{
      src: sixth,
      link: '/'
    },{
      src: seventh,
      link: '/'
    },{
      src: eighth,
      link: '/'
    },{
      src: ninth,
      link: '/'
    },{
      src: tenth,
      link: '/'
    },{
      src: eleventh,
      link: '/'
    },{
      src: twelfth,
      link: '/'
    }
  ]

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  const mobile = 390;
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
