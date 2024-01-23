import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { RiSendPlaneLine } from "react-icons/ri";
import "../../styles/NoticeRervation.scss";
import { avatar } from "../../assets/index";

function NoticeReservation() {
  return (
    <section className="NoticeReservation">
      <div className="reserhead">
        <FaLessThan className="icon" />
        <h1> Réservations </h1>
      </div>
      <div className="profile">
        {" "}
        <img src={avatar} alt="avatar profile" />{" "}
        <h2>
          Samanta Doe
          <span>Maman poule</span>
          <span>100% complété</span>
        </h2>
      </div>
      <div className="filter_box">
        <button type="button">Toutes les reservations</button>
        <button type="button">Passées</button>
        <button type="button">A venir</button>
        <button type="button">En attente</button>
      </div>
      <div className="profile_container">
        <div className="profile_box">
          <img src={avatar} alt="description" />
          <div className="descrip">
            <h3>Shakuro</h3>
            <p>Invitation</p>
          </div>
          <button type="button" className="attente">
            Demande en attente
          </button>
          <span>Lun 17 sept </span>
          <div className="icons">
            <FcCalendar />
            <RiSendPlaneLine />
          </div>
        </div>
        <div className="profile_box">
          <img src={avatar} alt="description" />
          <div className="descrip">
            <h3>Shakuro</h3>
            <p>Invitation</p>
          </div>
          <button type="button" className="accpt">
            Demande en attente
          </button>
          <span>Lun 17 sept </span>
          <div className="icons">
            <FcCalendar />
            <RiSendPlaneLine />
          </div>
        </div>
        <div className="profile_box">
          <img src={avatar} alt="description" />
          <div className="descrip">
            <h3>Shakuro</h3>
            <p>Invitation</p>
          </div>
          <button type="button" className="refus">
            Demande en attente
          </button>
          <span>Lun 17 sept </span>
          <div className="icons">
            <FcCalendar />
            <RiSendPlaneLine />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeReservation;
