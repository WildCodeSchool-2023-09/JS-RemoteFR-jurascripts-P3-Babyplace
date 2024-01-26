// import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { logo } from "../../assets";
import "../../styles/reservation.scss";

function Reservation() {
  const [firstNameParent, setFirstNameParent] = useState("");
  const [lastNameParent, setLastNameParent] = useState("");
  const [firstNameBaby, setFirstNameBaby] = useState("");

  const handleSubmitBaby = (parentID) => {
    const dateOfBirt = "2024-01-01";

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/child`, {
        parentId: parentID, // id du parent pour lier les deux tables
        firstName: firstNameBaby,
        lastName: lastNameParent,
        dateOfBirth: dateOfBirt,
      })
      .then(() => {
        console.info("Succès pour le bébé !");
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
  };
  const handleSubmitParent = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/parent`, {
        firstName: firstNameParent,
        lastName: lastNameParent,
      })
      .then((response) => {
        const parentId = response.data.id; // pour récup l'id qui a pop lors de l'insertion
        console.info("Succès pour le parent !");

        // insérer le bébé avec le même ID de parent
        handleSubmitBaby(parentId);
        if (firstNameBaby && firstNameParent && lastNameParent !== "") {
          window.location.href = `/parents/reservation/creation`;
        }
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
  };

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
          value={lastNameParent}
          onChange={(e) => setLastNameParent(e.target.value)}
        />
        <input
          type="text"
          name="firstname"
          autoComplete="given-name"
          placeholder="Prénom"
          value={firstNameParent}
          onChange={(e) => setFirstNameParent(e.target.value)}
        />
        <input
          type="text"
          name="nameOfChildren"
          autoComplete="given-name"
          placeholder="Prénom de l'enfant"
          onChange={(e) => setFirstNameBaby(e.target.value)}
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

        <button onClick={handleSubmitParent} type="button">
          Créer dossier réservation
        </button>
      </form>
    </div>
  );
}

export default Reservation;
