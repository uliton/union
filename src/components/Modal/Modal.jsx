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
  const [phone, setPhone] = useState('+38 (0');
  const [unmount, setUnmount] = useState(false);

  const handleExitClick = () => {
    setUnmount(true);
    setTimeout(() => {
      setModalStatus(false);
    }, 500);
  };

  const handleInputChange = (value) => {
    const symbols = '(+-1234567890)';
    
    if (symbols.includes(value[value.length - 1])) {
      if (value.length < phone.length && value.length === 15) {
        return setPhone(value.slice(0, 14));
      }
        
      if (value.length < phone.length && value.length === 12) {
        return setPhone(value.slice(0, 11))
      }
          
      if (value.length < phone.length && value.length === 8) {
        return setPhone(value.slice(0, 7))
      }
            
      if (value.length <= 18 ) {
        if (value.length >= 6) {
          setPhone(value);
        }
  
        if (value.length === 8) {
          setPhone(`${value})`);
        }
  
        if (value.length === 12 || value.length === 15) {
          setPhone(`${value}-`);
        }
      }
    }
  };

  const submit = () => {
    if (name.length && phone.length === 18) {
      sendContacts(name, phone);
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
            {MOCK.modal_header}
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
          <div className="modal__title">
            {MOCK.modal_title}
          </div>

          <input
            type="text"
            placeholder={MOCK.modal_name}
            className="modal__input"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder={MOCK.modal_phone}
            className="modal__input"
            value={phone}
            onChange={e => handleInputChange(e.target.value)}
          />

          <button type="submit" className={classNames('modal__button', {
            'modal__button--active': name.length && phone.length === 18
          })}>
            {MOCK.modal_button}
          </button>
        </form>
      </div>
    </div>
  );
};
