import React from "react";
import { avatar, logo } from "../../assets";
import "../../styles/notifAccept.scss";

function NotifAccept() {
  return (
    <section className="Notifs">
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
        <button type="button">Confirmé</button>
      </div>
    </section>
  );
}

export default NotifAccept;
