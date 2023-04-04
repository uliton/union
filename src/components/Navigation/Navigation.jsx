import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Logo } from '../../images/icons/Logo';
// import { Search } from '../../images/icons/Search';
// import { Favorite } from '../../images/icons/Favorite';
// import { Bag } from '../../images/icons/Bag';
import { MenuIcon } from '../../images/icons/MenuIcon';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Navigation = ({ menuStatus, setMenuStatus }) => {
  const [position, setPosition] = useState(false);
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  // scroll disable
  menuStatus ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  // let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 3) {
      setPosition(true);
    } else {
      setPosition(false);
    }

    //in top
    // if (prevScrollpos === 0 && currentScrollPos < 5) {
    //   // prevScrollpos = currentScrollPos;
    //   return;
    // }
    // move down
    // if (prevScrollpos < currentScrollPos) {
    //   if (document.getElementById("nav").style.top !== "-90px") {
    //     document.getElementById("nav").style.top = "-90px";
    //   }
    //   prevScrollpos = currentScrollPos;
    //   return;
    // }
    // move up
    // if (prevScrollpos > currentScrollPos) {
    //   if (document.getElementById("nav").style.top !== "0") {
    //     document.getElementById("nav").style.top = "0";
    //   }
    //   prevScrollpos = currentScrollPos;
    //   return;
    // }
  }

  // console.log(position)

  return (
    <div className={classNames('nav', {
      'nav--position': position,
    })} id='nav'>
      <div className='nav__left'>
        <button
          type='button'
          className='nav__menu-btn'
          onClick={() => setMenuStatus(true)}
        >
          <MenuIcon />
        </button>

        <div
          id='nav__menu'
          className="nav__menu"
          onClick={() => setMenuStatus(true)}
        >
          {MOCK.nav_menu}
        </div>
        {/* bl */}

        <Link to='portfolio' className="nav__portfolio" id='nav__portfolio'>
          {MOCK.nav_portfolio}
        </Link>

        {/* <Link to='/' className="nav__shop" id='nav__shop'>
          {MOCK.nav_online_shop}
        </Link> */}
      </div>

      <Link to='/' className='nav__logo'>
        <Logo />
      </Link>

      {/* <div className='nav__right'>
        <Search />

        <Favorite />

        <Bag />
      </div> */}
    </div>
  );
};
