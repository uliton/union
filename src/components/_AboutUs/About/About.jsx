import React, { useContext } from 'react';
import { Head } from '../../Head/Head';
import { Language, getTranslation } from '../../../functions/language';
import { Title } from '../../../ui/Title';
import { Description } from '../../../ui/Description';
// import { Image } from '../../../ui/Image';
import img from '../../../images/bg/portfolio.jpg';

export const About = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <>
      <Head link='/about' mock={MOCK.about_header_title} />

      <section className="container about">
        <img src={img} alt="Union Stone" className='about__img' />
        <Title content={MOCK.about_title_1} />
        <Description content={MOCK.about_description_1} about={true} />

        <img src={img} alt="Union Stone" className='about__img' />
        <Title content={MOCK.about_title_2} />
        <Description content={MOCK.about_description_2} about={true} />

        <img src={img} alt="Union Stone" className='about__img' />
        <Title content={MOCK.about_title_3} />
        <Description content={MOCK.about_description_3} about={true} />

        <img src={img} alt="Union Stone" className='about__img' />
        <Title content={MOCK.about_title_4} />
        <Description content={MOCK.about_description_4} about={true} />
      </section>
    </>
  );
};




// Про компанию

// надо сделать в шапке рядом с портфолию
// взять прикрепить туда галерею продукта и вписать текст

// кидаю по заголовкам на двух языках

// широкое фото

// ВООБРАЗИТЕ СВОЕ ПРОСТРАНСТВО

// В UNION STONE мы помогаем создавать произведения искусства, вдохновляем на создание уникальных дизайнов и улучшаем жизнь наших клиентов с помощью плит и мебели из янтаря. Мы известны широким ассортиментом продукции и способностью создавать индивидуальные проекты, чтобы наши клиенты могли воплотить свои идеи в жизнь. Мы уважаем, мы вдохновляем, мы улучшаем, мы поставляем; сегодня, завтра, вне зависимости от амбиций, вне зависимости от вызова, в UNION STONE мы позаботимся о всех деталях, крупных или мелких. Наш энтузиазм и опыт вместе с пристальным вниманием к деталям позволяет нам предоставлять широкий ассортимент интегрированных решений из янтаря, что дает вам свободу творчества и простор для воображения.

// IMAGINE YOUR SPACE

// At UNION STONE, we help create icons of style and miracles, with our products represented in some of the most iconic buildings in the world. We are known for our wide range of products and ability to create custom series for both small and large projects, allowing our clients to bring their ideas to life. We respect, inspire, improve, and deliver - today, tomorrow, no matter the challenge. Our enthusiasm and experience, combined with meticulous attention to detail, allow us to offer a wide range of integrated solutions in amber stone, giving you the freedom to be creative and imagine possibilities.

// широкое фото











// ПРОФИЛЬ КОМПАНИИ

// UNION STONE - это уникальный и эксклюзивный бренд, специализирующийся на производстве настенных и половых плиток, а также мебели из янтаря. Мы работаем с ведущими дизайнерскими компаниями и ателье в Объединенных Арабских Эмиратах, Англии, Италии, Польше и других странах Европы. Наша компания быстро развивается и сейчас имеет штаб-квартиру в Польше, но уже сейчас мы ведем переговоры по поставке камня по всему миру, включая Европу, Средний Восток, Северную Африку, Азию, Северную и Южную Америки, а также Австралию.


// Company Profile

// UNION STONE is a unique and exclusive brand specializing in wall and floor tiles, as well as furniture made of amber. We collaborate with renowned design companies and studios in the United Arab Emirates, England, Italy, Poland, and other European countries.
// The company is rapidly growing and currently has its headquarters in Poland, but is already in negotiations in Europe, the Middle East, North Africa, Asia, North and South America, and Australia.



// фото фото




// КАЧЕСТВО

// QUALITY

// Компания UNION STONE идет в ногу со временем и стремится к постоянному улучшению качества своей продукции. Мы гордимся тем, что были первыми в мире, кто создал крупнейшую плиту из янтаря, не содержащую клея, обоксидной смолы и других химических склеивающих материалов. Этот факт зафиксирован в Книге рекордов Гиннеса. Таким образом, мы доказываем, что наши янтарные плиты являются 100% янтарными кусками, которые сохраняют все свои доброжелательные свойства.
// Our company, UNION STONE, keeps up with the times and strives for constant improvement of the quality of our products. We take pride in being the first in the world to create the largest amber tile without glue, oxidized resin, or other chemical bonding materials. This fact has been recorded in the Guinness Book of Records. Thus, we prove that our amber tiles are 100% made of amber pieces and maintain all their beneficial properties.

// фото






// ЭКОЛОГИЧНОСТЬ

// ECO-FRIENDLINESS

// UNION STONE стремится быть в лидерах экологической ответственности в индустрии. Мы принимаем на себя ответственность за уменьшение нашего следа на окружающей среде, начиная с выбора материалов и заканчивая окончательной продукцией. Мы производим наши плиты и мебель из янтаря, природного материала, который не только является прочным и красивым, но и экологически чистым и безопасным для здоровья. Мы также постоянно работаем над улучшением наших производственных процессов и использованием энергии, чтобы сократить наш след на окружающую среду. UNION STONE убеждена, что экологические ценности должны быть в центре нашего бизнеса, и мы готовы работать с нашими клиентами и партнерами, чтобы продвигать устойчивое будущее вместе.


// In English:
// UNION STONE strives to be a leader in environmental responsibility in the industry. We take responsibility for reducing our footprint on the environment, starting from the choice of materials and ending with the final product. We produce our amber stone tiles and furniture from a natural material that is not only durable and beautiful, but also environmentally friendly and safe for health. We also constantly work on improving our production processes and energy use to reduce our impact on the environment. UNION STONE believes that environmental values should be at the heart of our business, and we are ready to work with our clients and partners to promote a sustainable future together.