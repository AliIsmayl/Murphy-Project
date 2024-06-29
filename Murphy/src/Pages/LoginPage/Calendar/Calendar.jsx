import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import './Calendar.scss'

const CalendarPicker = ({ setDateState, dateState }) => {

  const changeDate = (e) => {
    setDateState(e)
  }



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
