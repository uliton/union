import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../functions/language';

export const PortfolioHead = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <header className='portfolio-header'>
      <Link to='/portfolio' className='portfolio-header__name'>
        {MOCK.portfolio_header_title}
      </Link>
    </header>
  );
};
