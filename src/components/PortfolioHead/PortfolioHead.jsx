import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../functions/language';
import portfolio from '../../images/bg/portfolio.jpg';

export const PortfolioHead = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const { f } = useParams();

  return (
    <header className='portfolio-header'>
      <img src={portfolio} alt="portfolio" className='portfolio-header__img' />

      <Link to='/portfolio' className='portfolio-header__name'>
        {MOCK.portfolio_header_title}
      </Link>

      <h3 className='portfolio-header__sbuname'>
        {f !== undefined && f.split('_').slice(0, -1).join(' ')}
      </h3>
    </header>
  );
};
