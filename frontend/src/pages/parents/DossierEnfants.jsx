import React, { useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import axios from "axios";
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
  const [inputs, setInputs] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    marcheur: "",
    allergies: "",
    assurance: "",
    vaccination: "",
    acteNaissance: "",
    medecinTraitant: "",
    aptitude: "",
    autorisation: "",
  });

  const handlValid = (checkName) => {
    setValidator((chekcs) => ({ ...chekcs, [checkName]: !chekcs[checkName] }));
  };
  const handlInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((preInputs) => ({ ...preInputs, [name]: value }));
    if (value === "") {
      setValidator((chekcs) => ({ ...chekcs, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/parents/1`,
        inputs
      );
      console.info(res.data);
    } catch (err) {
      console.error(err);
    }
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
        <form action="submit" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="checkboxNom">
              {" "}
              <input
                type="checkbox"
                id="checkboxNom"
                name="nom"
                checked={validator.nom && inputs.nom}
                disabled={!inputs}
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
              placeholder="nom"
              id="nom"
              name="nom"
              value={inputs.nom}
              onChange={handlInputChange}
            />
          </div>
          <div>
            <label htmlFor="checkboxPrenom">
              {" "}
              <input
                type="checkbox"
                id="checkboxPrenom"
                name="validate"
                disabled={!inputs.prenom}
                checked={validator.prenom && inputs.prenom}
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
            <input
              type="text"
              placeholder="prenom"
              id="prenom"
              name="prenom"
              value={inputs.prenom}
              onChange={handlInputChange}
            />
          </div>
          <div>
            <label htmlFor="checkboxdateNaissance">
              {" "}
              <input
                type="checkbox"
                id="checkboxdateNaissance"
                name="validate"
                checked={validator.dateNaissance && inputs.dateNaissance}
                disabled={!inputs.dateNaissance}
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
            <input
              type="text"
              id="dateNaissance"
              name="dateNaissance"
              placeholder="Date de Naissance"
              value={inputs.dateNaissance}
              onChange={handlInputChange}
            />
          </div>
          <div>
            <label htmlFor="checkboxmarcheur">
              {" "}
              <input
                type="checkbox"
                id="checkboxmarcheur"
                name="marcheur"
                disabled={!inputs.marcheur}
                checked={validator.marcheur && inputs.marcheur}
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
            <input
              type="text"
              name="marcheur"
              id="marcheur"
              value={inputs.marcheur}
              placeholder="Marcheur / Non Marcheur"
              onChange={handlInputChange}
            />
          </div>
          <div>
            <label htmlFor="checkboxallergies">
              {" "}
              <input
                type="checkbox"
                id="checkboxallergies"
                name="allergies"
                checked={validator.allergies && inputs.allergies}
                disabled={!inputs.allergies}
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
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={inputs.allergies}
              placeholder="Allergies"
              onChange={handlInputChange}
            />
          </div>
          <div>
            <label htmlFor="checkboxassurance">
              {" "}
              <input
                type="checkbox"
                id="checkboxassurance"
                name="assurance"
                checked={validator.assurance && inputs.assurance}
                disabled={!inputs.assurance}
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
            <input
              type="text"
              id="assurance"
              name="assurance"
              value={inputs.assurance}
              placeholder="Attestation d'assurance"
              onChange={handlInputChange}
            />
            <RiLinksFill />
          </div>
          <div>
            <label htmlFor="checkboxvaccination">
              {" "}
              <input
                type="checkbox"
                id="checkboxvaccination"
                name="vaccination"
                checked={validator.vaccination && inputs.vaccination}
                disabled={!inputs.vaccination}
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
            <input
              type="text"
              id="vaccination"
              name="vaccination"
              value={inputs.vaccination}
              placeholder="Carnet de santé / Vaccination"
              onChange={handlInputChange}
            />
            <RiLinksFill />
          </div>
          <div>
            <label htmlFor="checkboxacteNaissance">
              {" "}
              <input
                type="checkbox"
                id="checkboxacteNaissance"
                name="validate"
                checked={validator.acteNaissance && inputs.acteNaissance}
                disabled={!inputs.acteNaissance}
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
              name="acteNaissance"
              id="acteNaissance"
              value={inputs.acteNaissance}
              onChange={handlInputChange}
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
                name="medecinTraitant"
                checked={validator.medecinTraitant && inputs.medecinTraitant}
                disabled={!inputs.medecinTraitant}
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
            <input
              type="text"
              name="medecinTraitant"
              id="medecinTraitant"
              placeholder="Médecin traitant"
              onChange={handlInputChange}
            />
          </div>
          <div>
            <label htmlFor="checkboxaptitude">
              {" "}
              <input
                type="checkbox"
                id="checkboxaptitude"
                name="aptitude"
                checked={validator.aptitude && inputs.aptitude}
                disabled={!inputs.aptitude}
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
              name="aptitude"
              id="aptitude"
              value={inputs.aptitude}
              onChange={handlInputChange}
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
                name="autorisation"
                checked={validator.autorisation && inputs.autorisation}
                disabled={!inputs.autorisation}
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
              name="autorisation"
              id="autorisation"
              value={inputs.autorisation}
              onChange={handlInputChange}
              placeholder="Autorisation de soin et d'hospitalisation"
            />
            <RiLinksFill />
          </div>
          <input type="submit" value="Envoyer" className="send" />
        </form>
      </div>
    </section>
  );
}

export default DossierEnfants;
