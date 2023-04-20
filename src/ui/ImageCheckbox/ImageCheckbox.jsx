import classNames from 'classnames';
import React, { useState } from 'react';
import './ImageCheckbox.scss';
import { Agree } from '../../images/icons/Agree/Agree';

export const ImageCheckbox = ({ name = '', filterSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    // filterSubmit(name);
    setIsChecked(!isChecked);
  }

  const nameId = name.split(' ').join('-').toLowerCase();

  return (
    <div className="panel">
      <input
        id={`checkbox--${nameId}`}
        type="checkbox"
        value="caramel"
        checked={isChecked}
        onChange={checkHandler}
        className="panel__input"
        hidden
      />
      <label
        htmlFor={`checkbox--${nameId}`}
        className={classNames("panel__label", {
          "panel__label--isChecked": isChecked,
        })}
      >
        <div className={`panel__checkbox panel__checkbox--${nameId}`}></div>
        {isChecked && (
          <div className="panel__agree">
            <Agree />
          </div>
        )}
        <p className="panel__text">
          {name}
          {/* {MOCK.p_0001_title} */}
        </p>
      </label>

    </div>
  );
};
