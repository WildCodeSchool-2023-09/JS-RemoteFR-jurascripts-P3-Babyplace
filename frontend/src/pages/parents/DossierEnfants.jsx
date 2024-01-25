import React, { useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import HeaderDoc from "../../components/parents/HeaderDoc";
import "../../styles/dossierenfants.scss";

function DossierEnfants() {
  const [validator, setValidator] = useState({
    nom: false,
    prenom: false,
    dateNaissance: false,
    marcheur: false,
    allergies: false,
    assurance: false,
    vaccination: false,
    acteNaissance: false,
    medecinTraitant: false,
    aptitude: false,
    autorisation: false,
  });
  const [input, setInput] = useState("");

  const handlValid = (checkName) => {
    setValidator((chekcs) => ({ ...chekcs, [checkName]: !chekcs[checkName] }));
  };

  return (
    <section className="InscriptionDoc">
      <HeaderDoc />
      <h2>Dossier enfants</h2>
      <div className="childs">
        <div className="child_doc">
          <button type="button">Bébé Cannan 1</button>
          <button type="button">Bébé Cannan 2</button>
          <button type="button">Bébé Cannan 3</button>
        </div>
        <form action="submit">
          <div>
            <label htmlFor="checkboxNom">
              {" "}
              <input
                type="checkbox"
                id="checkboxNom"
                name="validate"
                checked={validator.nom}
                onChange={() => handlValid("nom")}
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
              placeholder="Nom"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="checkboxPrenom">
              {" "}
              <input
                type="checkbox"
                id="checkboxPrenom"
                name="validate"
                checked={validator.prenom}
                onChange={() => handlValid("prenom")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Prénom" />
          </div>
          <div>
            <label htmlFor="checkboxdateNaissance">
              {" "}
              <input
                type="checkbox"
                id="checkboxdateNaissance"
                name="validate"
                checked={validator.dateNaissance}
                onChange={() => handlValid("dateNaissance")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Date de Naissance" />
          </div>
          <div>
            <label htmlFor="checkboxmarcheur">
              {" "}
              <input
                type="checkbox"
                id="checkboxmarcheur"
                name="validate"
                checked={validator.marcheur}
                onChange={() => handlValid("marcheur")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Marcheur / Non Marcheur" />
          </div>
          <div>
            <label htmlFor="checkboxallergies">
              {" "}
              <input
                type="checkbox"
                id="checkboxallergies"
                name="validate"
                checked={validator.allergies}
                onChange={() => handlValid("allergies")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Allergies" />
          </div>
          <div>
            <label htmlFor="checkboxassurance">
              {" "}
              <input
                type="checkbox"
                id="checkboxassurance"
                name="validate"
                checked={validator.assurance}
                onChange={() => handlValid("assurance")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Attestation d'assurance" />
            <RiLinksFill />
          </div>
          <div>
            <label htmlFor="checkboxvaccination">
              {" "}
              <input
                type="checkbox"
                id="checkboxvaccination"
                name="validate"
                checked={validator.vaccination}
                onChange={() => handlValid("vaccination")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Carnet de santé / Vaccination" />
            <RiLinksFill />
          </div>
          <div>
            <label htmlFor="checkboxacteNaissance">
              {" "}
              <input
                type="checkbox"
                id="checkboxacteNaissance"
                name="validate"
                checked={validator.acteNaissance}
                onChange={() => handlValid("acteNaissance")}
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
              placeholder="Acte de naissance / ou certificat de grossesse"
            />
            <RiLinksFill className="validatorIcon" />
          </div>
          <div>
            <label htmlFor="checkboxmedecinTraitant">
              {" "}
              <input
                type="checkbox"
                id="checkboxmedecinTraitant"
                name="validate"
                checked={validator.medecinTraitant}
                onChange={() => handlValid("medecinTraitant")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input type="text" placeholder="Médecin traitant" />
          </div>
          <div>
            <label htmlFor="checkboxaptitude">
              {" "}
              <input
                type="checkbox"
                id="checkboxaptitude"
                name="validate"
                checked={validator.aptitude}
                onChange={() => handlValid("aptitude")}
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
              placeholder="Certificat d'aptitude à l'acceuil collectif"
            />
            <RiLinksFill />
          </div>
          <div>
            <label htmlFor="checkboxautorisation">
              {" "}
              <input
                type="checkbox"
                id="checkboxautorisation"
                name="validate"
                checked={validator.autorisation}
                onChange={() => handlValid("autorisation")}
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
              placeholder="Autorisation de soin et d'hospitalisation"
            />
            <RiLinksFill />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" />
      </div>
    </section>
  );
}

export default DossierEnfants;
