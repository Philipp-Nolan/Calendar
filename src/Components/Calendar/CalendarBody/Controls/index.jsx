import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import style from './Control.module.sass';

export default function Controls({ openPrevMonth, openNextMonth }) {
  return (
    <div className={style.control}>
      <button className={style.plus} onClick={openPrevMonth}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button className={style.minus} onClick={openNextMonth}>
        {' '}
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}
