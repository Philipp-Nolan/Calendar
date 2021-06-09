import React from 'react';
import style from './Day.module.sass';

function Day(props) {
  return (
    <div className={style.container}>
      <h2 className={style.dayOfWeek}>{props.dayOfWeek}</h2>
      <h1 className={style.day}>{props.dayName}</h1>
    </div>
  );
}
export default Day;
