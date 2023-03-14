import classNames from "classnames";
import React, { useContext, useState } from "react";
import { getTranslation, Language } from "../../context/Language";
import { sendContacts } from "../../functions/t_mess";
import { Close } from "../../images/icons/Close/Close";
// import exit_icon from '../../images/modal_exit_icon.svg';


export const Catch = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('');
  const [catchStatus, setCatchStatus] = useState(false);

  const handlerTelefonClick = () => {
    if (telefon.length === 0) {
      setTelefon('+38 (0');
    }
  }
  // const handleExitClick = () => {
  //   setUnmount(true);
  //   setTimeout(() => {
  //     setModalStatus(false);
  //   }, 500);
  // };

  const handleInputChange = (value) => {
    const symbols = '(+-1234567890)';
    
    if (symbols.includes(value[value.length - 1])) {
      if (value.length < telefon.length && value.length === 15) {
        return setTelefon(value.slice(0, 14));
      }
        
      if (value.length < telefon.length && value.length === 12) {
        return setTelefon(value.slice(0, 11))
      }
          
      if (value.length < telefon.length && value.length === 8) {
        return setTelefon(value.slice(0, 7))
      }
            
      if (value.length <= 18 ) {
        if (value.length >= 6) {
          setTelefon(value);
        }
  
        if (value.length === 8) {
          setTelefon(`${value})`);
        }
  
        if (value.length === 12 || value.length === 15) {
          setTelefon(`${value}-`);
        }
      }
    }
  };

  const submit = () => {
    if (name.length && telefon.length === 18) {
      sendContacts(name, telefon);
      setCatchStatus(true);
    }
  }

  return (
    <section
      className={classNames('catch', {})}
    >
      <div className="catch__body">
        <div className="catch__title">Мы свяжемся с выми и ответим на все вопросы</div>

        <form
          className="catch__content"
          onSubmit={submit}
        >
          <input
            type="text"
            placeholder="Ваше имя"
            className="catch__input"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Номер телефона"
            className="catch__input"
            value={telefon}
            onChange={e => handleInputChange(e.target.value)}
            onClick={handlerTelefonClick}
          />

          <button type="submit" className={classNames('catch__button', {
            'catch__button--active': name.length && telefon.length === 18
          })}>
            Получить консультацию
          </button>
        </form>
      </div>
    </section>
  );
};
