import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "../../styles/calendar.scss";
import getFormattedEvents from "../../utils/getFormattedEvent";

Modal.setAppElement("#root");
function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [availableEmployees, setAvailableEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await getFormattedEvents();
      setCurrentEvents(data);
    };

    loadEvents();
  }, []);

  const handleEventClick = useCallback(async ({ event }) => {
    setSelectedEvent(event);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/available-employees?date=${
        event.start.toISOString().split("T")[0]
      }&startTime=${event.start.toISOString().split("T")[1]}&endTime=${
        event.end.toISOString().split("T")[1]
      }`
    );
    const employees = await response.json();

    const employeeMap = employees.reduce((map, employee) => {
      const newMap = { ...map };
      newMap[employee.employee_id] = employee;
      return newMap;
    }, {});

    const uniqueEmployees = Object.values(employeeMap);

    function openModal() {
      if (uniqueEmployees.length > 0) {
        setSelectedEmployee(uniqueEmployees[0].employee_id);
        setModalIsOpen(true);
      }
    }
    setAvailableEmployees(uniqueEmployees);
    openModal();
  }, []);

  const handleAssignClick = useCallback(async () => {
    if (selectedEmployee === null) {
      console.error("Selected employee is null");
      return;
    }

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/disponibilities/${
      selectedEvent.id
    }/decrement`;

    const updateResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ places: -1 }),
    });

    if (!updateResponse.ok) {
      console.error("Error:", updateResponse.status, updateResponse.statusText);
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/assignments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservationId: selectedEvent.id,
          employeeId: selectedEmployee,
        }),
      }
    );

    if (!response.ok) {
      console.error("Error:", response.status, response.statusText);
      return;
    }

    const selectedEmployeeData = availableEmployees.find(
      (employee) => employee.employee_id === Number(selectedEmployee)
    );

    if (!selectedEmployeeData) {
      console.error("No employee found with id:", selectedEmployee);
      return;
    }

    const calendarApi = calendarRef.current.getApi();
    const event = calendarApi.getEventById(selectedEvent.id);

    if (event) {
      event.setExtendedProp(
        "employeeName",
        `${selectedEmployeeData.first_name} ${selectedEmployeeData.last_name}`
      );
      event.setExtendedProp(
        "classNames",
        `employee-${selectedEmployeeData.employee_id}`
      );
    }
    setModalIsOpen(false);
  }, [currentEvents, selectedEmployee, selectedEvent, availableEmployees]);

  const handleSelectChange = useCallback((e) => {
    setSelectedEmployee(e.target.value);
  }, []);

  const eventContent = useCallback((args) => {
    const className = `employee-${args.event.extendedProps.employeeName}`;
    const employeeNames = args.event.extendedProps.employeeName;

    return {
      html: `
      <div class="${className}" style="width: 100%; height: 100%; display: flex; flex-direction: column; padding: 5px;">
        <div style="text-align: center; padding: 5px;"><b>${args.event.title}</b></div> ${employeeNames} </div>
    `,
    };
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-main">
        <FullCalendar
          ref={calendarRef}
          key={currentEvents.length}
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
          eventClick={handleEventClick}
          eventContent={eventContent}
        />
        {selectedEvent && (
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              contentLabel="Assign Employee Modal"
              className="modal"
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 10000,
                },
              }}
            >
              <select onChange={handleSelectChange}>
                {availableEmployees.map((employee) => {
                  return (
                    <option key={employee.id} value={employee.employee_id}>
                      {employee.first_name} {employee.last_name}
                    </option>
                  );
                })}
              </select>
              <button type="button" onClick={handleAssignClick}>
                Assigner
              </button>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
