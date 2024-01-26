import React, { useState } from "react";
import {
  MdSmokeFree,
  MdOutlineHealthAndSafety,
  MdOutlineMedicalServices,
  MdAttractions,
  MdDirectionsWalk,
  MdOutlineBedroomBaby,
  MdMusicNote,
  MdOutlineFoodBank,
  MdBabyChangingStation,
} from "react-icons/md";
import { background, info } from "../../assets/parents/creche";
import "../../styles/creches.scss";
import Modal from "./Modal";

function Creche() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="creche">
      <div className="title" id="title">
        <h1> Crèche Picoti Picota</h1>
        <p className="parentale">crèche parentale</p>
      </div>
      <div className="creche_container">
        <img src={background} alt="creche" className="creche_img" />

        <div className="creche_description">
          <h2>Présentation</h2>
          <p>
            La crèche Picoti Picota n'est pas qu'un lieu de garde c'est surtout
            un lieu d'échange et d'accueil des enfants et des familles dans une
            confiance réciproque où le respect, l'autonomie et la sécurité sont
            des référence privilégiées dans notre projet
          </p>
          <div className="days_box">
            <div className="info">
              <img src={info} alt="infoIcon" />{" "}
            </div>
            <ul>
              <li>Horaires : Lundi - Samedi : 9h - 16h</li>
              <li>Téléphone : 05 56 56 56 56</li>
              <li>Mail : Picoti_Picota@contact.fr</li>
            </ul>
          </div>
          <div className="disponibility">
            <h2>Disponibilités</h2>
            <ul>
              <li>Lundi</li>
              <li>Mardi</li>
              <li>Mercredi</li>
              <li>Jeudi</li>
              <li>Vendredi</li>
              <li>Samedi</li>
            </ul>
          </div>
          <div className="experiences">
            <h2>Expérience</h2>
            <div className="experiences_box">
              <MdOutlineHealthAndSafety />
              <span>Formation 1er secours </span>
            </div>
            <div className="experiences_box">
              <MdOutlineMedicalServices />
              <span>Formation Nesting</span>
            </div>
            <div className="experiences_box">
              <MdBabyChangingStation />
              <span>Pédagogie Montessori</span>
            </div>
          </div>
          <div className="accueil">
            <h2>Accueil</h2>
            <div className="accueil_box">
              <MdAttractions />
              <span>Sorties extérieure </span>
            </div>
            <div className="accueil_box">
              <MdOutlineFoodBank />
              <span>Repas maison</span>
            </div>
            <div className="accueil_box">
              <MdSmokeFree />
              <span>Foyer Non-Fumeur</span>
            </div>
          </div>
          <div className="activities">
            <h2>Activité</h2>
            <div className="activities_box">
              <MdDirectionsWalk />
              <span>Promenade </span>
            </div>
            <div className="activities_box">
              <MdOutlineBedroomBaby />
              <span>Activité d'éveil</span>
            </div>
            <div className="activities_box">
              <MdMusicNote />
              <span>Atelier musique</span>
            </div>
          </div>
          <div className="tarif_button">
            <div className="price">
              <h5 className="prix"> 3,5€ / heure* </h5>{" "}
              <span className="note">(indemnité d'entretien)</span>
            </div>

            <button type="button" onClick={() => setIsOpen(true)}>
              Réserver
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
      <div className="reminder">
        <p className="reminder_box">
          * En <a href="title">complétant mon profil,</a>je peux obtenir une
          tarification personnalisée en fonction de mes revenus
        </p>{" "}
      </div>
    </div>
  );
}

export default Creche;
