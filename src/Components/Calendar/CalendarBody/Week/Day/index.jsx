import React from 'react';
import { format, isToday, isSameMonth } from 'date-fns';
import cn from 'classnames';
import style from './Day.module.sass';

export default function Day({ day, currentMonthDate }) {
  const classes = cn(style.container, {
    [style.currentDay]: isToday(day),
    [style.otherMonthDay]: !isSameMonth(day, currentMonthDate),
  });

  return <div className={classes}>{format(day, 'd')}</div>;
}
