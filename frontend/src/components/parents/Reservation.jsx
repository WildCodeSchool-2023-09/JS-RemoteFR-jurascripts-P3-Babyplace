import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "../../styles/reservation.scss";

function Reservation() {
  return (
    <div className="reservation_container">
      <img src={logo} alt="a logo of website" />
      <h1> Demande réservation</h1>
      <form action="submit">
        <input
          type="text"
          name="lastname"
          autoComplete="family-name"
          placeholder="Nom"
        />
        <input
          type="text"
          name="firstname"
          autoComplete="given-name"
          placeholder="Prénom"
        />
        <input
          type="text"
          name="nameOfChildren"
          autoComplete="given-name"
          placeholder="Prénom de l'enfant"
        />
        <input
          type="text"
          name="email"
          autoComplete="email"
          placeholder="Email"
        />
        <input type="text" name="adress" placeholder="Adresse,CP,Ville" />
        <input
          type="number"
          name="phoneNumber"
          autoComplete="tel-national"
          placeholder="Téléphone mobile"
        />
        <Link to="/parents/reservation/creation">
          <button type="button">Créer dossier réservation</button>
        </Link>
      </form>
    </div>
  );
}

export default Reservation;
