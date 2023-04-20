import React, { useContext, useState } from "react";
import classNames from "classnames";
import { getTranslation, Language } from "../../functions/language";
import { sendContacts } from "../../functions/t_mess";
import { Close } from "../../images/icons/Close";
import { ImageCheckbox } from "../../ui/ImageCheckbox";
import { Title } from "../../ui/Title";

export const ModalBig = ({ ident, setModalStatus, isOpen }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [unmount, setUnmount] = useState(false);

  const handleExitClick = () => {
    setModalStatus(false);
  };

  // const modalUnmount = () => {
  //   if (unmount) {
  //     setModalStatus(false);
  //   }
  // };

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

  const submit = (e) => {
    e.preventDefault();

    if (name.length && phone.length === 18) {
      sendContacts(name, phone, ident);
      setModalStatus(false);
    }
  }

  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div
      id="modalBig"
      className={classNames('modalBig', {
        'modalBig--is-open': isOpen,
        // 'modalBig--unmount': unmount,
      })}
      // onAnimationEnd={modalUnmount}
    >
      <div className="modalBig__area" onClick={handleExitClick}></div>

      <div className={classNames("modalBig__body", {
        'modalBig__body--is-open': isOpen,
      })}>
        <div className="modalBig__header">
          <div className="modalBig__header__text">
            <Title content="Подбери свою плиту" />
          </div>

          <div
            className="modalBig__close"
            onClick={handleExitClick}
          >
            <Close />
          </div>
        </div>

        {/* <div className="modalBig__title">
          {MOCK.modal_title}
        </div> */}

        <form
          className="modalBig__content"
          onSubmit={submit}
        >

          <div className="modalBig__content__panels">
            <ImageCheckbox name='Caramel' />
            <ImageCheckbox name='Honey Fantasy' />
            <ImageCheckbox name='Black Prince' />
            <ImageCheckbox name='Gottlieb' />
            <ImageCheckbox name='Fantasy Mix' />
            <ImageCheckbox name='Royal Fantasy' />
          </div>

          Ширина
          <input
            type="range"
            min="0"
            max="100"
            // value="0"
            // name="range"
            // step="1"
          />
          
          Висота
          <input
            type="range"
            min="0"
            max="100"
            // value="50"
            name="range"
            step="1"
          />
          
          <input type="range" name="" id="" />

          <select name="" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>


          <Title content="ЗАЛИШТЕ СВОЇ КОНТАКТНІ ДАНІ, ЩОБ НАШ СПЕЦІАЛІСТ З ВАМ ЗВ'ЯЗАЛИСЯ" />

          <input
            type="text"
            placeholder={MOCK.modal_name}
            className="modalBig__input"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder={MOCK.modal_phone}
            className="modalBig__input"
            value={phone}
            onChange={e => handleInputChange(e.target.value)}
            onClick={() => setPhone('+38 (0')}
            onSelect={() => {
              if (phone.length === 0) {
                setPhone('+38 (0');
              }
            }}
          />

          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
      

          <button type="submit" className={classNames('modalBig__button', {
            'modalBig__button--active': name.length && phone.length === 18
          })}>
            {MOCK.modal_button}
          </button>
        </form>
      </div>
    </div>
  );
};
