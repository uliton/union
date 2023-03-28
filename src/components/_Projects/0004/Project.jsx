import React, { useContext } from 'react';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/Button/Button';
import { getTranslation, Language } from '../../../functions/language';

import './Project.scss';

export const Project0004 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <>
      <div className='portfolio-room'>
        <Title content={'Title'}/>

        <div className="container" style={{gridArea: "description", margin: '0 auto'}}>
          <Description content={'Description'} />
        </div>
      </div>
    </>
  );
};
