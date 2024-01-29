import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdOutlineHealthAndSafety,
  MdAttractions,
  MdOutlineFoodBank,
} from "react-icons/md";
import { background1, info } from "../../assets/parents/creche";

import "../../styles/crecheDetails.scss";

function CrecheDetails() {
  const [popup, setPopup] = useState(false);
  const [button, setButton] = useState(false);
  const [mode, setMode] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const pricesUrl = `${
        import.meta.env.VITE_BACKEND_URL
      }/api/reservation/${id}/prices`;

      axios
        .get(pricesUrl)
        .then((response) => {
          const priceFromApi = response.data.price;
          const priceFormatted = priceFromApi.replace("-", ".");
          const basicPrice = parseFloat(priceFormatted);
          const maintenanceFee = button ? 3.5 : 0;
          const foodFee = mode ? 7 : 0;
          const newTotal = basicPrice + maintenanceFee + foodFee + 0.5;
          setTotalPrice(newTotal);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération du prix depuis l'API",
            error
          );
        });
    }

    if (id) {
      fetchData();
    }
  }, [id, button, mode]);

  const switchButton = () => {
    setButton(!button);
  };

  const handleMode = () => {
    setMode(!mode);
  };

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  async function updatePrice(newPrice, reservationId) {
    try {
      await axios.put(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/reservation/${reservationId}/prices`,
        {
          prices: newPrice,
        }
      );
      return true;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du prix", error);
      return false;
    }
  }

  async function handleNextClick() {
    if (id) {
      const updateSuccess = await updatePrice(totalPrice, id);

      if (updateSuccess) {
        const reservationId = localStorage.getItem("reservationId");
        navigate(`/reservation/${reservationId}/details`);
      }
    }
  }

  return (
    <section className="crechedetails">
      <h1 className="creche-title">Crèche Picoti Picota</h1>
      <div className="creche-container">
        <img src={background1} alt="creche" className="creche-img" />

        <div className="creche-description">
          <h2 className="creche-reservation">Demande de Réservation</h2>
          <h2 className="creche-reservation">
            La crèche Picoti Picota
            <button type="submit" className="icon-info" onClick={openPopup}>
              <img src={info} alt="info icon" />
            </button>
            {popup && (
              <div className="popup">
                <a href="/parents/creche">Présentation de la crèche</a>
                <button type="submit" onClick={closePopup}>
                  Fermer
                </button>
              </div>
            )}
          </h2>
          <ul className="creche-date">
            <li>
              Date : Lundi 12 février 2024
              <span>
                <IoSettingsOutline />
              </span>
            </li>
            <li>
              Horaire : 9h-17h
              <span>
                <IoSettingsOutline />
              </span>
            </li>
          </ul>
          <div className="activities">
            <MdAttractions /> <span>Repas bio</span>
            <MdOutlineFoodBank /> <span>Accueil Handicap</span>
            <MdOutlineHealthAndSafety />
            <span>Horaires Tarifs</span>
          </div>
          <div className="indemnities">
            <li>Indemnité kilométrique (0,50€)</li>
            <li className="indemnities-list">
              <label
                htmlFor="switch-entretien"
                className={`indemnities-r ${button ? "active" : ""}`}
              >
                Indemnité d'entretien (3,50€)
                <input
                  type="checkbox"
                  checked={button}
                  id="switch-entretien"
                  className="slider"
                  onChange={switchButton}
                />
              </label>
            </li>
            <li className="indemnities-list">
              <label
                htmlFor="switch-repas"
                className={`indemnities-l ${mode ? "active" : ""}`}
              >
                Indemnité repas (7€)
                <input
                  type="checkbox"
                  checked={mode}
                  id="switch-repas"
                  className="slider"
                  onChange={handleMode}
                />
              </label>
            </li>
          </div>
          <div className="tarif-button">
            <ul className="price">
              <li className="prix"> {totalPrice}€* </li>
              <li className="note">8 h de garde*</li>
            </ul>
            <button
              type="submit"
              className="btn-detail"
              onClick={handleNextClick}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
      <p className="reminder">
        * En <a href="title">complétant mon profil,</a> je peux obtenir une
        tarification personnalisée en fonction de mes revenus.
      </p>
    </section>
  );
}

export default CrecheDetails;
