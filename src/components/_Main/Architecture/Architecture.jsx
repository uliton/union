import React, { useContext } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { TextLink } from '../../../ui/TextLink';

export const Architecture = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <section className='architecture container'>
      
      <Title content={MOCK.architecture_title} architecture={true}/>

      <div style={{gridArea: 'description'}}>
        <Description content={MOCK.architecture_description_1} architecture={true} />
        <Description content={MOCK.architecture_description_2} architecture={true} />
        <Description content={MOCK.architecture_description_3} architecture={true} />
      </div>

      <TextLink path='portfolio/test' content={MOCK.architecture_link} architecture={true} />
    </section>
  );
};
