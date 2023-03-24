import React from 'react';
import b1 from '../../images/portfolio_preview/1.jpg';
import l1 from '../../images/portfolio_preview/2.jpg';
import l2 from '../../images/portfolio_preview/3.jpg';
import o1 from '../../images/portfolio_preview/4.jpg';
import d1 from '../../images/portfolio_preview/5.jpg';
import i1 from '../../images/portfolio_preview/6.jpg';
import i2 from '../../images/portfolio_preview/7.jpg';
import i3 from '../../images/portfolio_preview/8.jpg';
import h1 from '../../images/portfolio_preview/9.jpg';
import d2 from '../../images/portfolio_preview/10.jpg';
import { Title } from '../../ui/Title';
import { Description } from '../../ui/Description';
import { useParams } from 'react-router';

export const PortfolioRoom = () => {
  const { f } = useParams();
  const images = [{i1}, {i2}, {i3}, {d2}, {d1}, {o1}, {h1}, {b1}, {l1}, {l2}];
  const key = f.split('_').slice(-1).toString();
  const image = images.find(img => img[key]);
  console.log(image)
  return (
    <main className='portfolio-room'>

      <Title content={'Title'}/>

      <img src={image[key]} alt="" className='portfolio-room__img' />

      <div className="container" style={{gridArea: "description", margin: '0 auto'}}>
        <Description content={'Description'} />
      </div>
    </main>
  );
};
