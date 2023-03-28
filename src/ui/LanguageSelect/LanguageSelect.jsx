import classNames from 'classnames';
import React, { useContext } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { Ae } from '../../images/icons/AE/Ae';
import { Ch } from '../../images/icons/CH/Ch';
import { En } from '../../images/icons/EN/En';
import { Pl } from '../../images/icons/PL/Pl';
import { Ru } from '../../images/icons/RU/Ru';
import { Ua } from '../../images/icons/UA/Ua';

export const LanguageSelect =({
  setLanguage,
  menu = false,
  footer = false,
}) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div className='language-selector'>
      <p
        className={classNames('language-selector__query', {
          'language-selector__query--menu': menu,
          'language-selector__query--footer': footer,
        })}
      >
        {MOCK.language_name.toUpperCase()}
      </p>
      
      <En onChange={setLanguage} />
      {/* <Ua onChange={''} /> */}
      {/* <Pl onChange={''} /> */}
      {/* <Ae onChange={''} /> */}
      {/* <Ch onChange={''} /> */}
      <Ru onChange={setLanguage} />
    </div>
  );
};
