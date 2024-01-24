import React from "react";
import { avatar, logo } from "../../assets";
import "../../styles/notifRefus.scss";

function NotifRefused() {
  return (
    <section className="Notifs">
      <img className="notifPic" src={logo} alt="babyplace" />
      <div className="profilPicture">
        <img src={avatar} alt="representation parents" />
        <img src={avatar} alt="representation parents" />
      </div>
      <div className="centerLogoRefus">
        <img src={logo} alt="" />
      </div>
      <h1>Refusé</h1>
      <p>
        La crèche Picoti Picota est dans l'incapacité de gader votre enfant
        leLundi 14 septembre de 9h à 17h
      </p>
      <div className="statusRefus">
        <span>Statut de votre réservation</span>
        <button type="button">Confirmé</button>
      </div>
    </section>
  );
}

export default NotifRefused;
