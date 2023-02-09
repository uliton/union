import React, { useContext, useState } from "react";
import { getTranslation, Language } from "../../context/Language";
import exit_icon from '../../images/modal_exit_icon.svg';


export const Modal = ({ modalStatus, setModalStatus }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('+38-(0');

  const handleExitClick = () => {
    setModalStatus(false);
  };

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

  const handleSubmitClick = () => {
    setModalStatus(false);
  };

  return (
    <div
      className="modal"
    >
      <div className="modal__form form">
        <div className="form__exit-button">
          <button
            type="button"
            className="form__exit-button--container"
            onClick={handleExitClick}
          >
            <img src={exit_icon} alt="exit" className="form__exit-button--image"/>
          </button>
        </div>

        <div className="form__wrapper">
          <div className="form__title">
            UNION STONE
          </div>

          <div className="form__subtitle">
            откройте для себя янтарное чудо света
          </div>

          <div className="form__text">
            Union Stone — это единственные в мире изделия из камней янтаря
          </div>

          <input
            type="text"
            className="form__input form__input--input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            className="form__input form__input--input"
            value={telefon}
            onChange={(e) => {handleInputChange(e.target.value)}}
          />

          <button
            type='button'
            className='configurator__button'
            onClick={handleSubmitClick}
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
};
