import React, { useContext } from 'react';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { Link } from 'react-router-dom';
// import { Button } from '../../../ui/Button/Button';
import { getTranslation, Language } from '../../../functions/language';

import './Project.scss';

export const Project0001 = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <>
      <div className='portfolio-room container'>
        <Title content={'Title'}/>

        <Description content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, non consequatur libero animi aut nesciunt corporis dolore debitis velit eos atque tempore dolor minima est provident minus quia voluptatem, nulla deleniti? Dicta, culpa! Maxime, accusamus nesciunt non excepturi alias quidem perferendis provident a sunt laudantium. Aperiam veritatis ipsam debitis magni!'} project={true} />
        {/* <div className="container" style={{gridArea: "description", margin: '0 auto'}}>
        </div> */}

      </div>
    </>
  );
};
