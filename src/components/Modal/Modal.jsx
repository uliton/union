import classNames from "classnames";
import React, { useContext, useState } from "react";
import { getTranslation, Language } from "../../context/Language";
import { sendContacts } from "../../functions/t_mess";
import { Close } from "../../images/icons/Close/Close";
// import exit_icon from '../../images/modal_exit_icon.svg';


export const Modal = ({ ident, setModalStatus }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('');
  const [unmount, setUnmount] = useState(false);

  const handleExitClick = () => {
    setUnmount(true);
    setTimeout(() => {
      setModalStatus(false);
    }, 500);
  };

  const handlerTelefonClick = () => {
    if (telefon.length === 0) {
      setTelefon('+38 (0');
    }
  }

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

  const submit = (e) => {
    e.preventDefault();
    if (name.length && telefon.length === 18) {
      sendContacts(name, telefon, ident);
      setModalStatus(false);
    }
  }

  return (
    <div
      id="modal"
      className={classNames('modal', {
        'modal--unmount': unmount
      })}
    >
      <div className="modal__area" onClick={handleExitClick}></div>
      <div className="modal__body">
        <div className="modal__header">
          <div className="modal__header__text">
            Узнать больше
          </div>

          <div
            className="modal__close"
            onClick={handleExitClick}
          >
            <Close />
          </div>
        </div>

        <form
          className="modal__content"
          onSubmit={submit}
        >
          <div className="modal__title">Мы свяжемся с выми и ответим на все вопросы</div>

          <input
            type="text"
            placeholder="Ваше имя"
            className="modal__input"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Номер телефона"
            className="modal__input"
            value={telefon}
            onChange={e => handleInputChange(e.target.value)}
            onClick={handlerTelefonClick}
          />

          <button type="submit" className={classNames('modal__button', {
            'modal__button--active': name.length && telefon.length === 18
          })}>
            Получить консультацию
          </button>
        </form>
      </div>
    </div>
  );
};
