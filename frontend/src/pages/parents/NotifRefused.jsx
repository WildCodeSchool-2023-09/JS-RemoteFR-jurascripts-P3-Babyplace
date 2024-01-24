import { Link } from "react-router-dom";
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
        <Link to="/parents/profile/reservations">
          <button type="button">Ok</button>
        </Link>{" "}
      </div>
    </section>
  );
}

export default NotifRefused;
