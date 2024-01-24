import { FaLessThan } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/dossierInscription.scss";

function DossierInscription() {
  const [validator, setValidator] = useState({
    justificatifRevenu: false,
    declaRevenu: false,
    caf: false,
    securiteSociale: false,
    jusDomicile: false,
    sitProfessionnelle: false,
    rib: false,
    autoPhoto: false,
    autoSortie: false,
    livretFamille: false,
    justifDivorce: false,
  });

  const handlValid = (checkName) => {
    setValidator((chekcs) => ({ ...chekcs, [checkName]: !chekcs[checkName] }));
  };

  return (
    <section className="InscriptionDoc">
      <div className="parent_box">
        <div className="parent">
          <Link to="/parents/folders">
            <FaLessThan className="icon" />
          </Link>
          <h1>
            Ed Cannan
            <span>Papa Poule</span>
          </h1>
        </div>
        <div className="linksTo">
          <Link to="/parents/dossierenfants" className="link">
            Enfants
          </Link>
          <Link to="/parents/dossierparents" className="link">
            Parents
          </Link>
          <Link to="/parents/dossierinscription" className="link">
            Inscription
          </Link>
        </div>
      </div>
      <h2>Dossier d'inscription</h2>
      <div className="Inscription_doc">
        <form action="submit">
          <div>
            <label htmlFor="checkboxjustificatifRevenu">
              {" "}
              <input
                type="checkbox"
                id="checkboxjustificatifRevenu"
                name="validate"
                checked={validator.justificatifRevenu}
                onChange={() => handlValid("justificatifRevenu")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              placeholder="Justificatif de revenu (moins de 3 moins)"
            />
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxdeclaRevenu">
              {" "}
              <input
                type="checkbox"
                id="checkboxdeclaRevenu"
                name="validate"
                checked={validator.declaRevenu}
                onChange={() => handlValid("declaRevenu")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              placeholder="Déclaration de revenu (année en cours)"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxcaf">
              {" "}
              <input
                type="checkbox"
                id="checkboxcaf"
                name="validate"
                checked={validator.caf}
                onChange={() => handlValid("caf")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="number" placeholder="Numéro de la caf" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxsecuriteSociale">
              {" "}
              <input
                type="checkbox"
                id="checkboxsecuriteSociale"
                name="validate"
                checked={validator.securiteSociale}
                onChange={() => handlValid("securiteSociale")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="number" placeholder="Numéro de sécurité sociale" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxjusDomicile">
              {" "}
              <input
                type="checkbox"
                id="checkboxjusDomicile"
                name="validate"
                checked={validator.jusDomicile}
                onChange={() => handlValid("jusDomicile")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Justificdati de domicile" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxsitProfessionnelle">
              {" "}
              <input
                type="checkbox"
                id="checkboxsitProfessionnelle"
                name="validate"
                checked={validator.sitProfessionnelle}
                onChange={() => handlValid("sitProfessionnelle")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              placeholder="Justificatif de situation professionnelles"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxrib">
              {" "}
              <input
                type="checkbox"
                id="checkboxrib"
                name="validate"
                checked={validator.rib}
                onChange={() => handlValid("rib")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="RIB" /> <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxautoPhoto">
              {" "}
              <input
                type="checkbox"
                id="checkboxautoPhoto"
                name="validate"
                checked={validator.autoPhoto}
                onChange={() => handlValid("autoPhoto")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Autorisation photo et vidéo" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxautoSortie">
              {" "}
              <input
                type="checkbox"
                id="checkboxautoSortie"
                name="validate"
                checked={validator.autoSortie}
                onChange={() => handlValid("autoSortie")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Autorisation de sortie" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxlivretFamille">
              {" "}
              <input
                type="checkbox"
                id="checkboxlivretFamille"
                name="validate"
                checked={validator.livretFamille}
                onChange={() => handlValid("livretFamille")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Copie livret de famille" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxjustifDivorce">
              {" "}
              <input
                type="checkbox"
                id="checkboxjustifDivorce"
                name="validate"
                checked={validator.justifDivorce}
                onChange={() => handlValid("justifDivorce")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Copie du jugement de divorce" />{" "}
            <MdChevronRight />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" />
      </div>
    </section>
  );
}

export default DossierInscription;
