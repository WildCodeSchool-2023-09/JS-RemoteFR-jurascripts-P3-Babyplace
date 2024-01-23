import React from "react";
import { Link } from "react-router-dom";
import CalendarParents from "../../components/parents/CalendarParents";
import "../../styles/agendaparents.scss";
import { background } from "../../assets/parents/creche";

function AgendaParents() {
  return (
    <section className="agenda-parents">
      <div className="title-container">
        <Link to="/parents/creche">
          <button className="icon" type="submit">
            &lt;
          </button>
        </Link>
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
      <Link to="/parents/crechedetails">
        <button className="btn-parent" type="submit">
          Terminé
        </button>
      </Link>
    </section>
  );
}

export default AgendaParents;
