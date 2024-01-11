import { Link } from "react-router-dom";
import { home, logo } from "../../assets";
import "../../styles/reservation_tunnel.scss";
import NavBar from "./NavBar";

function ReservationTunnel() {
  return (
    <div className="reservation_tunnel">
      <img src={logo} alt="the logo of website" className="logo_website" />
      <img
        src={home}
        alt="an avatar who represent mom and his child"
        className="logo_reservation"
      />
      <h1>Merci !</h1>
      <h2>Votre demande de réservation a été créé avec succès !</h2>
      <p>
        Cependant, il faut que vous complétiez votre dossier afin de finaliser
        votre demande !
      </p>
      <Link to="/parents/folders" className="link-res">
        <button type="button">Compléter mon dossier</button>
      </Link>

      <div className="later_text">
        <a href="/NotFound">Je complèterais plus tard </a>
        <span>&gt;</span>
      </div>
      <NavBar />
    </div>
  );
}

export default ReservationTunnel;
