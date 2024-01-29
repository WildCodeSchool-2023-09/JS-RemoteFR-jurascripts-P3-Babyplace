import { Link, useParams } from "react-router-dom";
import { home, logo } from "../../assets";
import "../../styles/reservation_tunnel.scss";

function ReservationTunnel() {
  const { reservationId } = useParams();
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
      <Link to={`/parents/folders/${reservationId}`} className="link-res">
        <button type="button">
          Compléter mon dossier <span className="fleche">⮕</span>
        </button>
      </Link>

      <div className="later_text">
        <a href="/NotFound">Je complèterais plus tard </a>
        <span>&gt;</span>
      </div>
    </div>
  );
}

export default ReservationTunnel;
