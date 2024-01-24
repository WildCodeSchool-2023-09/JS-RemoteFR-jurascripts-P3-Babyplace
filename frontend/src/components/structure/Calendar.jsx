import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import "../../styles/calendar.scss";
import getFormattedEvents from "../../utils/getFormattedEvent";

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await getFormattedEvents();
      setCurrentEvents(data);
    };

    loadEvents();
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-main">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          slotMinTime="07:00"
          slotMaxTime="20:00"
          allDaySlot={false}
          locale="fr"
          initialView="timeGridWeek"
          slotDuration="01:00:00"
          editable={false}
          selectable={false}
          selectMirror
          dayMaxEvents
          weekends={false}
          nowIndicator
          scrollTimeReset={false}
          events={currentEvents}
          // eventsSet={handleEvents}
          // select={handleDateSelect}
          // eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}

export default Calendar;
