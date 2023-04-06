import React from 'react';
import { Link } from 'react-router-dom';

export const Head = ({ link = '/', mock = '' }) => {
  return (
    <header className='head'>
      <Link to={link} className='head__name'>
        {mock}
      </Link>
    </header>
  );
};
