import React, { useState } from 'react';
import style from './CalendarBody.module.sass';
import {
  startOfMonth,
  endOfMonth,
  eachWeekOfInterval,
  format,
  addMonths,
  subMonths,
} from 'date-fns';
import Header from './Header';
import Week from './Week';
import Controls from './Controls';

function CalendarBody() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const weeksInMonthArray = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const openPrevMonth = () => setCurrentDate((currentDate) => subMonths(currentDate, 1));

  const openNextMonth = () => setCurrentDate((currentDate) => addMonths(currentDate, 1));

  const weeks = weeksInMonthArray.map((weekStartDate) => (
    <Week
      startDate={weekStartDate}
      currentDate={currentDate}
      key={weekStartDate.toLocaleDateString()}
    />
  ));

  return (
    <div className={style.calendarBody}>
      <Controls openPrevMonth={openPrevMonth} openNextMonth={openNextMonth} />
      <h3 className={style.calendarHeader}>{format(currentDate, 'MMMM yyyy')}</h3>
      <Header />
      {weeks}
    </div>
  );
}

export default CalendarBody;
