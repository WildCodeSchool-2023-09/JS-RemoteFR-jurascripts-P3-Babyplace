import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import {
  background,
  balade,
  infe,
  info,
  wifi,
  tea,
} from "../../assets/parents/creche";
import "../../styles/crecheDetails.scss";

function CrecheDetails() {
  const [button, setButton] = useState(false);
  const [mode, setMode] = useState(false);

  const switchButton = () => {
    setButton(!button);
  };

  const handleMode = () => {
    setMode(!mode);
  };

  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  const calculationTotalPrice = (basicPrice, maintenance, food) => {
    const maintenanceFee = maintenance ? 3.5 : 0;
    const foodFee = food ? 7 : 0;

    return basicPrice + maintenanceFee + foodFee;
  };

  // prix x nb of hours :
  const basicPrice = 3.5 * 8 + 0.5;
  const totalPrice = calculationTotalPrice(basicPrice, button, mode);

  return (
    <section className="crechedetails">
      <h1 className="creche-title">
        <Link to="/parents/creche">
          <img src={infe} alt="inferieur icon" />
        </Link>
        Crèche Picoti Picota
      </h1>
      <div className="creche-container">
        <img src={background} alt="creche" className="creche-img" />

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
              Date : lundi 14 janvier
              <span>
                <IoSettingsOutline />
              </span>
            </li>
            <li>
              Horaire : 9-17h
              <span>
                <IoSettingsOutline />
              </span>
            </li>
          </ul>
          <div className="activities">
            <img src={balade} alt="balade" /> <span>Repas bio</span>
            <img src={tea} alt="tea" /> <span>Accueil Handicap</span>
            <img src={wifi} alt="tea" />
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
                {/* <span className="slider" /> */}
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
                {/* <span className="slider" /> */}
              </label>
            </li>
          </div>
          <div className="tarif-button">
            <ul className="price">
              <li className="prix"> {totalPrice}€* </li>
              <li className="note">8 h de garde*</li>
            </ul>

            <Link to="*">
              <button type="button" className="btn-detail">
                Suivant
              </button>
            </Link>
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
