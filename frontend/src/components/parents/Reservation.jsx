import { logo } from "../../assets";
import "../../styles/reservation.scss";

function Reservation() {
  return (
    <div className="reservation_container">
      <img src={logo} alt="a logo of website" />
      <h1> Demande réservation</h1>
      <form action="submit">
        <input type="text" name="lastname" placeholder="Nom" />
        <input type="text" name="firstname" placeholder="Prénom" />
        <input
          type="text"
          name="nameOfChildren"
          placeholder="Prénom de l'enfant"
        />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="adress" placeholder="Adresse,CP,Ville" />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Téléphone mobile"
        />
        <button type="button">Créer dossier réservation</button>
      </form>
    </div>
  );
}

export default Reservation;
