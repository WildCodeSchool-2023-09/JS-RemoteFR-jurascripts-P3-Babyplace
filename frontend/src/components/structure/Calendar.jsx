import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../../styles/calendar.scss";
import useCalendar from "../../utils/Calendar";
import { createEventId } from "../../constants/dataGen";

function Calendar() {
  const { currentEvents, setCurrentEvents } = useCalendar();

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };
  const handleDateSelect = (selectInfo) => {
    // eslint-disable-next-line no-alert
    const title = prompt("Merci d'ecrire votre evenement");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Etes-vous sur de vouloir supprimer l'evenement ?")) {
      clickInfo.event.remove();
    }
  };

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
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends={false}
          nowIndicator
          scrollTimeReset={false}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}

export default Calendar;
