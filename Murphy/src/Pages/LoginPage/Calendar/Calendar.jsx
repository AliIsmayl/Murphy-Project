import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './Calendar.scss';

const CalendarPicker = ({ setDateState, dateState }) => {
  
  const changeDate = (e) => {
    const formattedDate = moment(e).format('YYYY-MM-DDTHH:mm:ss');
    setDateState(formattedDate);
  };

  return (
    <>
      <Calendar
        value={dateState ? new Date(dateState) : null} // Seçilen tarih yoksa boş bırak
        onChange={changeDate}
      />
    </>
  );
};

export default CalendarPicker;
