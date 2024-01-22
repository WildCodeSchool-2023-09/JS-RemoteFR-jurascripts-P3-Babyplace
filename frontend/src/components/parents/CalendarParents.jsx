import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { fr } from "date-fns/locale";
import dayjs from "dayjs";
import React, { useState } from "react";
import "../../styles/calendarparents.scss";

function CalendarParents() {
  const [chooseDate, setChooseDate] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (start, end) => {
    const hourPrice = 3.5;
    const startMoment = dayjs(start);
    const endMoment = dayjs(end);
    const hoursDifference = endMoment.diff(startMoment, "hour", true);
    const calculatedPrice = hourPrice * hoursDifference;
    return calculatedPrice.toFixed(2);
  };

  const handleArrivalTimeChange = (time) => {
    setArrivalTime(time);
  };

  const handleDepartureTimeChange = (time) => {
    setDepartureTime(time);
    const price = calculateTotalPrice(arrivalTime, time);
    setTotalPrice(price);
  };

  const nineAM = dayjs().set("hour", 9).startOf("hour");
  const eightPM = dayjs().set("hour", 20).set("minute", 30).startOf("minute");
  const ninePM = dayjs().set("hour", 21).set("minute", 0).startOf("minute");

  const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
  };

  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  return (
    <section className="date-time-picker">
      <div className="calendar-parents">
        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={fr}>
          <DemoContainer components={["MobileDatePicker", "StaticDatePicker"]}>
            <DemoItem label="Choisissez votre date">
              <MobileDatePicker
                value={chooseDate}
                onChange={setChooseDate}
                shouldDisableDate={isWeekend}
                defaultValue={today}
                minDate={tomorrow}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="time-picker-container">
        <span className="calendar-date">
          Choisissez vos horaires
          <LocalizationProvider dateAdapter={AdapterDayjs} locale={fr}>
            <DemoContainer components={["MobileTimePicker"]}>
              <DemoItem label="Heure d'arrivée">
                <MobileTimePicker
                  value={arrivalTime}
                  onChange={handleArrivalTimeChange}
                  ampm={false}
                  minTime={nineAM}
                  maxTime={eightPM}
                />
              </DemoItem>
              <DemoItem label="Heure de départ">
                <MobileTimePicker
                  value={departureTime}
                  onChange={handleDepartureTimeChange}
                  ampm={false}
                  minTime={nineAM}
                  maxTime={ninePM}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </span>
      </div>
      <p className="para">Prix total : {totalPrice} €</p>
    </section>
  );
}

export default CalendarParents;
