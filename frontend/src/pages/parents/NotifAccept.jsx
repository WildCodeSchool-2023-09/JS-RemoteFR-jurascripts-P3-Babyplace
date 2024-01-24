import React from "react";
import { Link } from "react-router-dom";
import { avatar, logo } from "../../assets";
import "../../styles/notifAccept.scss";

function NotifAccept() {
  return (
    <section className="Notifss">
      <img className="notifPic" src={logo} alt="babyplace" />
      <div className="profilPicture">
        <img src={avatar} alt="representation parents" />
        <img src={avatar} alt="representation parents" />
      </div>
      <div className="centerLogo">
        <img src={logo} alt="" />
      </div>
      <h1>Accepté</h1>

      <p>
        La crèche Picoti Picota confirme accueillir votre enfant le Lundi 14
        septembre de 9h à 17h
      </p>
      <div className="status">
        <span>Statut de votre réservation</span>
        <Link to="/parents/profile/reservations">
          <button type="button">Ok</button>
        </Link>{" "}
      </div>
    </section>
  );
}

export default NotifAccept;
