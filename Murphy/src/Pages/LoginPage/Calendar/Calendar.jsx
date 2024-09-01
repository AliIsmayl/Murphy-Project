import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './Calendar.scss';

const CalendarPicker = ({ setDateState, dateState }) => {
  
  const changeDate = (e) => {
    // Seçilen tarihi istenen formata çeviriyoruz
    const formattedDate = moment(e).format('YYYY-MM-DDTHH:mm:ss');
    setDateState(formattedDate);
  };


  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
      />
    </>
  );
};

export default CalendarPicker;
