import React from 'react';
import style from './Header.module.sass';

function Header() {
  const arrOfDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className={style.container}>
      {arrOfDayNames.map((dayName) => (
        <div className={style.weekDayName} key={dayName}>
          {dayName}
        </div>
      ))}
    </div>
  );
}
export default Header;
