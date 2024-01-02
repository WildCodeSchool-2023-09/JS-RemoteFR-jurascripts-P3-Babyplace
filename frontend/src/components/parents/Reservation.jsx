import { logo } from "../../assets";
import "../../styles/reservation.scss";

function Reservation() {
  return (
    <div className="reservation_container">
      <img src={logo} alt="a logo of website" />
      <h1> Demande réservation</h1>
      <form action="submit">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="text" name="" id="" placeholder="Prénom de l'enfant" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Adresse,CP,Ville" />
        <input type="number" name="" id="" placeholder="Téléphone mobile" />
        <button type="submit">Créer dossier réservation</button>
      </form>
    </div>
  );
}

export default Reservation;
