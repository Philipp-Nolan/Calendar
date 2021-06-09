import React from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';
import style from './Calendar.module.sass';

function Calendar() {
  return (
    <div className={style.calendar}>
      <CurrentDay />
      <CalendarBody />
    </div>
  );
}
export default Calendar;
