import CalendarParents from "../../components/parents/CalendarParents";
import "../../styles/agendaparents.scss";
import { background } from "../../assets/parents/creche";

function AgendaParents() {
  return (
    <section className="agenda-parents">
      <div className="title-container">
        <img src={background} alt="avatar" className="user-avatar" />
        <span className="title">
          <span className="intro">Demandez une place</span>
          <h1 className="little-title">Crèche Picoti Picota</h1>
        </span>
      </div>
      <div>
        <div className="calendar" htmlFor="datepicker">
          {" "}
          <CalendarParents />
        </div>
      </div>
    </section>
  );
}

export default AgendaParents;
