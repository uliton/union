import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { getTranslation, Language } from '../../../functions/language';
import { sendEmail } from '../../../functions/t_mess';
import { Title } from '../../../ui/Title';

export const Subscribe = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const regExp = new RegExp('^([A_Za-z0-9_-]+\.)*[A_Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');

  const mailСheck = () => {
    if (email.match(regExp)) {
      return true;
    }

    return false;
  }

  const submit = () => {
    if (email.match(regExp)) {
      sendEmail(email);
      setEmail('');
      setSubscribeSuccess(true);
    }
  };

  return (
    <section className='subscribe'>
      <Title content={MOCK.subscribe_title} />

      <form
        className="subscribe__content container"
        onSubmit={submit}
      >
        <input
          type="text"
          placeholder={MOCK.subscribe_name}
          className="subscribe__input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className={classNames('subscribe__button', {
            'subscribe__button--active': mailСheck()
          })}
          onClick={submit}
        >
          {MOCK.subscribe_button}
        </button>
      </form>

      {subscribeSuccess && (
        <div className="subscribe__success">
          {MOCK.subscribe_success}
        </div>
      )}
    </section>
  );
};
