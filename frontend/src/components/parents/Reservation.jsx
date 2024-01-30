/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { logo } from "../../assets";
import "../../styles/reservation.scss";

function Reservation() {
  const [parentId, setParentId] = useState("");
  const [firstNameParent, setFirstNameParent] = useState("");
  const [lastNameParent, setLastNameParent] = useState("");
  const [firstNameBaby, setFirstNameBaby] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reservation/${id}/details`)
      .then((response) => {
        const result = response.data;
        setParentId(result.parent_id);
        setLastNameParent(result.last_name || "");
        setFirstNameParent(result.parent_first_name || "");
        setFirstNameBaby(result.child_first_name || "");
        setEmail(result.email || "");
        setAddress(result.address || "");
        setPhoneNumber(result.phone_number || "");
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: childData } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/child`,
        {
          firstName: firstNameBaby,
          lastName: lastNameParent,
          reservationId: id,
        }
      );

      const childId = childData.insertId;

      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservation/${id}/details`,
        {
          reservationId: id,
          childId,
          parentUpdateInfo: {
            lastName: lastNameParent,
            firstName: firstNameParent,
            email,
            address,
            phoneNumber,
          },
        }
      );

      navigate(`/parents/reservation/creation/${id}`);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de la réservation ou la création de l'enfant :",
        error
      );
    }
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
          value={firstNameBaby}
          onChange={(e) => setFirstNameBaby(e.target.value)}
        />
        <input
          type="text"
          name="email"
          autoComplete="email"
          placeholder="Adresse email"
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
          placeholder="Téléphone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Créer dossier réservation</button>
      </form>
    </div>
  );
}

export default Reservation;
