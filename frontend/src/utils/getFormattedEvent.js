import axios from "axios";
import moment from "moment";

const getFormattedEvents = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/calendar`
  );
  const formattedEvents = data.map((event) => {
    const dateStart = event.reservationDateStart.split("T")[0];
    const dateEnd = event.reservationDateEnd.split("T")[0];
    const start = moment(
      `${dateStart}T${event.startTime}`,
      "YYYY-MM-DDThh:mm:ss"
    ).toDate();
    const end = moment(
      `${dateEnd}T${event.endTime}`,
      "YYYY-MM-DDThh:mm:ss"
    ).toDate();

    return {
      id: event.id,
      title: event.child_name,
      start,
      end,
      employeeName: event.employee,
    };
  });
  return formattedEvents;
};

export default getFormattedEvents;
