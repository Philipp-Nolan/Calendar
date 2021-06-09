import React from 'react';
import Day from './Day';
import style from './CurrentDay.module.sass';
import { format } from 'date-fns';

function CurrentDay() {
  const today = new Date();
  const dayOfWeek = format(today, 'EEEE');
  const dayName = format(today, 'd');

  return (
    <div className={style.currentDay}>
      <Day dayOfWeek={dayOfWeek} dayName={dayName} />
    </div>
  );
}
export default CurrentDay;
