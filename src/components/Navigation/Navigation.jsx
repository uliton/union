import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Logo } from '../../images/icons/Logo';
import { Search } from '../../images/icons/Search';
import { Favorite } from '../../images/icons/Favorite';
import { Bag } from '../../images/icons/Bag';
import { Menu } from '../../images/icons/Menu';
import classNames from 'classnames';

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

        <div className="nav__menu">
          {MOCK.nav_menu}
        </div>
        <div className="nav__portfolio">
          {MOCK.nav_portfolio}
        </div>
        <div className="nav__shop">
          {MOCK.nav_online_shop}
        </div>
      </div>

      <Logo />

      <div className='nav__right'>
        <Search />

        <Favorite />

        <Bag />
      </div>
    </div>
  );
};
