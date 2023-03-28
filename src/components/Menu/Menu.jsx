import classNames from 'classnames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslation, Language } from '../../functions/language';
import { Logo } from '../../images/icons/Logo';
import { LanguageSelect } from '../../ui/LanguageSelect';

export const Menu = ({ isOpen, setMenuStatus, setLanguage }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div
      className={classNames('menu', {
        'menu--is-open': isOpen
      })}
      >

      <div className="menu__body">

        <div className="menu__header">
          <Logo menu={true} />

          <div
            type='button'
            className='menu__exit'
            onClick={() => {setMenuStatus(false)}}
          ></div>
        </div>

        <div className="menu__container">
          <Link
            to='/'
            className='menu__link'
            onClick={() => setMenuStatus(false)}
          >
            {MOCK.nav_main}
          </Link>

          <Link
            to='portfolio'
            className='menu__link'
            onClick={() => {setMenuStatus(false)}}
          >
            {MOCK.nav_portfolio}
          </Link>
        </div>

        <div className="menu__footer">
          <LanguageSelect setLanguage={setLanguage} menu={true} />
        </div>
      </div>
    </div>
  );
};
