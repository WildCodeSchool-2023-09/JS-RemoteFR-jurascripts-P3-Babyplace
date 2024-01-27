// import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { logo } from "../../assets";
import "../../styles/reservation.scss";

function Reservation() {
  const [firstNameParent, setFirstNameParent] = useState("");
  const [lastNameParent, setLastNameParent] = useState("");
  const [firstNameBaby, setFirstNameBaby] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  let parentId = 0;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/parents/${id}`)
      .then((response) => {
        const result = response.data;
        parentId = result.id;
        setLastNameParent(result.last_name);
        setFirstNameParent(result.first_name);
        setEmail(result.email);
        console.info(result);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/child`, {
        // id du parent pour lier les deux tables
        firstName: firstNameBaby,
        lastName: lastNameParent,
      })
      .then(() => {
        console.info("Succès pour l'enfant !");
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
    await axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/parents/${parentId}`, {
        firstName: firstNameParent,
        lastName: lastNameParent,
        email,
        address,
        phoneNumber,
      })
      .then(() => {
        console.info("Succès pour le parent !");
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
    navigate("/parents/reservation/creation");
  };

  return (
    <div className="reservation_container">
      <img src={logo} alt="a logo of website" />
      <h1> Demande réservation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="lastname"
          autoComplete="family-name"
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
          value={firstNameBaby}
          onChange={(e) => setFirstNameBaby(e.target.value)}
        />
        <input
          type="text"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="Adresse,CP,Ville"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          name="phoneNumber"
          autoComplete="tel-national"
          placeholder="Téléphone mobile"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Créer dossier réservation</button>
      </form>
    </div>
  );
}

export default Reservation;
