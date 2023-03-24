import React, { useContext } from 'react';
import { getTranslation, Language } from '../../functions/language';
import { TextLink } from '../../ui/TextLink';

export const NotFound = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <div className="not-found">
      <div className="not-found__text">
        {MOCK.not_found}
      </div>

      <TextLink content={'main page'} notFound={true} />
    </div>
  )
}
