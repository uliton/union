import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Logo } from '../../images/icons/Logo';
import { Search } from '../../images/icons/Search';
import { Favorite } from '../../images/icons/Favorite';
import { Bag } from '../../images/icons/Bag';
import { Menu } from '../../images/icons/Menu';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [position, setPosition] = useState(false);
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos)

    if (currentScrollPos > 1) {
      setPosition(true);
    } else {
      setPosition(false);
    }

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div className={classNames('nav', {
      'nav--position': position
    })} id='nav'>
      <div className='nav__left'>
        <Menu />

        <Link to='/' className="nav__menu" id='nav__menu'>
          {MOCK.nav_menu}
        </Link>

        <Link to='portfolio' className="nav__portfolio" id='nav__portfolio'>
          {MOCK.nav_portfolio}
        </Link>

        <Link to='/' className="nav__shop" id='nav__shop'>
          {MOCK.nav_online_shop}
        </Link>
      </div>

      <Link to='/' className='nav__logo'>
        <Logo />
      </Link>

      <div className='nav__right'>
        <Search />

        <Favorite />

        <Bag />
      </div>
    </div>
  );
};
