import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import portfolio from '../../images/bg/portfolio.jpg';

export const PortfolioHead = () => {
  const { f } = useParams();

  return (
    <header className='portfolio__header'>
      <img src={portfolio} alt="portfolio" className='portfolio__header__img' />

      <Link to='/portfolio' className='portfolio__header__name'>Portfolio</Link>
      <h3 className='portfolio__header__sbuname'>
        {f !== undefined && f.split('_').slice(0, -1).join(' ')}
      </h3>
    </header>
  );
};
