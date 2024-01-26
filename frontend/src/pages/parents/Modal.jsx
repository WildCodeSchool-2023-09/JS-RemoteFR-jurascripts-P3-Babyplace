import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/modal.scss";
import { info } from "../../assets/parents/creche";

function Modal({ open }) {
  if (!open) return null;
  return (
    <div className="modal_box">
      <div className="overlay" />
      <div className="modal">
        <div className="aggrements">
          <h2>
            <img src={info} alt="info" /> Aggréments{" "}
          </h2>{" "}
          <ul>
            <li>
              {" "}
              <span>1</span> Enfant handicapé
            </li>
            <li>
              <span>2</span> Enfant de moins de 18 mois
            </li>
            <li>
              <span>2</span> Horaires atypique
            </li>
            <li>
              <span>2</span> Accueil de nuit
            </li>
          </ul>
        </div>
        <div className="reglement">
          <h2>
            <img src={info} alt="info" /> Règlement Intérieur
          </h2>
          <p>
            La période d'adaptation est <strong>obligatoire</strong> Les parents
            sont priés de respecter l'environnement, le voisinage, la vie privée
            et la famille de l'assistante maternelle Taper ou sonner à la porte,
            ne pas rentrer sans y être invité et attendre qu'on vienne vous
            ouvrir. Les parents doivent me transmettent toutes les informations
            nécessaires, ainsi que les incidents éventuels survenus au domicile
            L'enfant arrivera en état de propreté, habillé et ayant pris son
            premier repas Les bijoux seront enlevés et rendus aux parents pour
            des raisons de sécurité (étouffement, ingestion…). L'assistante
            maternelle est habilitée à administrer les médicaments uniquement
            sur ordonnance ou protocole.
          </p>
        </div>
        <form action="form">
          <label htmlFor="checkboxcaf">
            <input type="checkbox" id="checkboxcaf" name="caf" />
            <svg viewBox="0 0 64 64" height="2em" width="2em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                className="path"
              />
            </svg>
            Acceptez nos conditions d'utilisation
          </label>
        </form>
        <Link to="/parents/agendaparents">
          <button type="button">J'ai compris !</button>
        </Link>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Modal;
