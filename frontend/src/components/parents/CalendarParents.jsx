/* eslint-disable no-unused-vars */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { frFR } from "@mui/x-date-pickers/locales";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/calendarparents.scss";

function CalendarParents() {
  const [chooseDate, setChooseDate] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [reservationId, setReservationId] = useState();
  const navigate = useNavigate();

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
  };

  useEffect(() => {
    if ((arrivalTime, departureTime)) {
      const price = calculateTotalPrice(arrivalTime, departureTime);
      setTotalPrice(price);
    }
  }, [arrivalTime, departureTime]);

  const handleSubmit = async () => {
    try {
      const parentId = localStorage.getItem("parentId");
      if (!parentId) {
        console.error("parentId is null");
        return;
      }

      const price = calculateTotalPrice(arrivalTime, departureTime);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservation`,
        {
          parentId,
          startTime: arrivalTime,
          endTime: departureTime,
          reservationDateStart: dayjs(chooseDate).format("YYYY-MM-DD"),
          reservationDateEnd: dayjs(chooseDate).format("YYYY-MM-DD"),
          prices: price,
        }
      );
      const newReservationId = response.data.insertId;
      setReservationId(newReservationId);
      localStorage.setItem("reservationId", newReservationId);

      if (price > 0) {
        navigate(`/parents/crechedetails/${newReservationId}`);
      }
    } catch (error) {
      console.error("Erreur", error);
    }
  };

  const eightAM = dayjs().set("hour", 8).startOf("hour");
  const sixPM = dayjs().set("hour", 18).set("minute", 30).startOf("minute");
  const sevenPM = dayjs().set("hour", 19).set("minute", 0).startOf("minute");

  const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
  };

  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  return (
    <section className="date-time-picker">
      <div className="calendar-parents">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["MobileDatePicker", "StaticDatePicker"]}>
            <DemoItem label="Choisissez votre date">
              <MobileDatePicker
                value={chooseDate}
                onChange={setChooseDate}
                shouldDisableDate={isWeekend}
                defaultValue={today}
                minDate={tomorrow}
                format="DD-MM-YYYY"
                localeText={
                  frFR.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="time-picker-container">
        <span className="calendar-date">
          Choisissez vos horaires
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["MobileTimePicker"]}>
              <DemoItem label="Heure d'arrivée">
                <MobileTimePicker
                  value={arrivalTime}
                  onChange={handleArrivalTimeChange}
                  ampm={false}
                  minTime={eightAM}
                  maxTime={sixPM}
                />
              </DemoItem>
              <DemoItem label="Heure de départ">
                <MobileTimePicker
                  value={departureTime}
                  onChange={handleDepartureTimeChange}
                  ampm={false}
                  minTime={eightAM}
                  maxTime={sevenPM}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </span>
      </div>
      <p className="para">Prix total : {totalPrice} €</p>
      <button
        disabled={totalPrice === 0}
        className="btn-parent"
        type="submit"
        onClick={handleSubmit}
      >
        Terminé
      </button>
    </section>
  );
}

export default CalendarParents;
