import React from 'react';
// import logo from '../../images/logo.svg';

export const Navigation = () => {
  return (
    <div className='nav'>
      <div className='nav__menu'>
        <div className="nav_menu--burger"></div>
        menu
      </div>

      <div className='nav__logo'></div>

      <div>
        <div>
          search
        </div>
        <div>
          favorite
        </div>
      </div>
    </div>
  );
};
