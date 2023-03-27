import classNames from 'classnames';
import React, { useState } from 'react';

export const Checkbox = ({ filter, filterSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    filterSubmit(filter);
    setIsChecked(!isChecked);
  }

  return (
    <div className='checkbox'>
      <input
        type="checkbox"
        id={`checkbox-${filter}`}
        checked={isChecked}
        onChange={checkHandler}
        hidden
      />
      <label
        htmlFor={`checkbox-${filter}`}
        className={classNames('checkbox__label', {
          'checkbox__label--isChecked': isChecked,
        })}
      >
          {filter}
        </label>
    </div>
  );
};
