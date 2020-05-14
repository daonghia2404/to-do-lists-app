import React from "react";
import "./day.scss";

export const Day = () => {
  const date = new Date();
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthOfYear = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];

  const currentDayOfWeek = dayOfWeek[date.getDay()];
  const currentDay = date.getDate();
  const currentMonth = monthOfYear[date.getMonth()];

  return (
    <h1 className="day">
      <strong>{currentDayOfWeek}, </strong>
      {`${currentDay} ${currentMonth}`}
    </h1>
  );
};
