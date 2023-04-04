import classNames from "classnames";
import React, { useContext, useState } from "react";
import { getTranslation, Language } from "../../../functions/language";
import { sendContacts } from "../../../functions/t_mess";
import { Title } from "../../../ui/Title";


import { MuiTelInput } from 'mui-tel-input';


// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';

// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import './Catch.scss';

export const Catch = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [catchStatus, setCatchStatus] = useState(false);




  // const input = document.querySelector("#phone");
  // intlTelInput(input, {
  //     // any initialisation options go here
  // });
  





  // const handlerPhoneClick = () => {
  //   if (phone.length === 0) {
  //     setPhone('+38 (0');
  //   }
  // }

  const handlePhoneChange = (value) => {
    setPhone(value)
    // const symbols = '(+-1234567890)';
    
    // if (symbols.includes(value[value.length - 1])) {
    //   if (value.length < phone.length && value.length === 15) {
    //     return setPhone(value.slice(0, 14));
    //   }
        
    //   if (value.length < phone.length && value.length === 12) {
    //     return setPhone(value.slice(0, 11))
    //   }
          
    //   if (value.length < phone.length && value.length === 8) {
    //     return setPhone(value.slice(0, 7))
    //   }
            
    //   if (value.length <= 18 ) {
    //     if (value.length >= 6) {
    //       setPhone(value);
    //     }
  
    //     if (value.length === 8) {
    //       setPhone(`${value})`);
    //     }
  
    //     if (value.length === 12 || value.length === 15) {
    //       setPhone(`${value}-`);
    //     }
    //   }
    // }
  };

  // console.log(phone.length)
  const submit = (e) => {
    e.preventDefault();

    if (
      name.length 
      && phone.length 
      // === 18
      ) {
      sendContacts(name, phone, 'Catch');
      setCatchStatus(true);
      setName('');
      setPhone('');
    }
  }

  return (
    <section
      className='catch'
    >
      <div className="catch__body">
        <div className="container" style={{margin: '0 auto'}}>
          <Title content={MOCK.catch_title} />
        </div>

        {catchStatus && (
          <>
            <div className="catch__success">
              {MOCK.catch_success_1}
            </div>

            <div className="catch__success">
              {MOCK.catch_success_2}
            </div>
          </>
        )}

        <form
          className="catch__content"
          onSubmit={submit}
        >
          <input
            type="text"
            placeholder={MOCK.catch_name}
            className="catch__input"
            id="catch__input"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <MuiTelInput
            value={phone}
            onChange={handlePhoneChange}
            forceCallingCode
            className="catch__input"
            placeholder={MOCK.catch_phone}
            defaultCountry="UA"
          />
          
          {/* <input
            type="text"
            placeholder={MOCK.catch_phone}
            className="catch__input"
            value={phone}
            onChange={e => handlePhoneChange(e.target.value)}
            id="phone"
            // onClick={handlerPhoneClick}
            // onSelect={() => {
            //   if (phone.length === 0) {
            //     setPhone('+38 (0');
            //   }
            // }}
          /> */}
          {/* <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
          /> */}



          <button type="submit" className={classNames('catch__button', {
            'catch__button--active': name.length && phone.length >= 15
            // === 18
          })}>
            {MOCK.catch_button}
          </button>
        </form>
      </div>
    </section>
  );
};
