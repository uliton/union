import React, { useContext, useState } from 'react';
import { getTranslation, Language } from '../../../functions/language';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
import { TextLink } from '../../../ui/TextLink';
import classNames from 'classnames';

export const Architecture = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [isVisible, setIsVisible] = useState(true);

  window.onscroll = function() {
    const animItem = document.querySelector('architecture');
    // const animItemHeight = animItem.offsetHeight;
    // const animItemOffset = offsetTot();
    
  }

  return (
    <section className='architecture container'>
      <div className={classNames("architecture__content", {
        "architecture__content--visible": isVisible,
      })}>
        <Title content={MOCK.architecture_title} architecture={true}/>

        <div style={{gridArea: 'description'}}>
          <Description content={MOCK.architecture_description_1} architecture={true} />
          <Description content={MOCK.architecture_description_2} architecture={true} />
          <Description content={MOCK.architecture_description_3} architecture={true} />
        </div>

        <TextLink path='portfolio' content={MOCK.architecture_link} architecture={true} />
      </div>
    </section>
  );
};
