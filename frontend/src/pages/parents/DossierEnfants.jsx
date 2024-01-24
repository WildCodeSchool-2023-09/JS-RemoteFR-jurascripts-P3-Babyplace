import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiLinksFill } from "react-icons/ri";
// import { GrValidate } from "react-icons/gr";
import NavBar from "../../components/parents/NavBar";
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
      <div className="parent_box">
        <div className="parent">
          <FaLessThan className="icon" />
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
      <h2>Dossier enfants</h2>
      <div className="childs">
        <div className="child_doc">
          <button type="button">Bébé Cannan 1</button>
          <button type="button">Bébé Cannan 2</button>
          <button type="button">Bébé Cannan 3</button>
        </div>
        <form action="submit">
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.nom}
              onChange={() => handlValid("nom")}
            />
            <input
              type="text"
              placeholder="Nom"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.prenom}
              onChange={() => handlValid("prenom")}
            />
            <input type="text" placeholder="Prénom" />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.dateNaissance}
              onChange={() => handlValid("dateNaissance")}
            />
            <input type="text" placeholder="Date de Naissance" />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.marcheur}
              onChange={() => handlValid("marcheur")}
            />
            <input type="text" placeholder="Marcheur / Non Marcheur" />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.allergies}
              onChange={() => handlValid("allergies")}
            />
            <input type="text" placeholder="Allergies" />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.assurance}
              onChange={() => handlValid("assurance")}
            />
            <input type="text" placeholder="Attestation d'assurance" />
            <RiLinksFill />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.vaccination}
              onChange={() => handlValid("vaccination")}
            />
            <input type="text" placeholder="Carnet de santé / Vaccination" />
            <RiLinksFill />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.acteNaissance}
              onChange={() => handlValid("acteNaissance")}
            />
            <input
              type="text"
              placeholder="Acte de naissance / ou certificat de grossesse"
            />
            <RiLinksFill className="validatorIcon" />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.medecinTraitant}
              onChange={() => handlValid("medecinTraitant")}
            />
            <input type="text" placeholder="Médecin traitant" />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.aptitude}
              onChange={() => handlValid("aptitude")}
            />
            <input
              type="text"
              placeholder="Certificat d'aptitude à l'acceuil collectif"
            />
            <RiLinksFill />
          </div>
          <div>
            <input
              className="check"
              type="checkbox"
              name="validate"
              checked={validator.autorisation}
              onChange={() => handlValid("autorisation")}
            />
            <input
              type="text"
              placeholder="Autorisation de soin et d'hospitalisation"
            />
            <RiLinksFill />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" />
      </div>
      <NavBar />
    </section>
  );
}

export default DossierEnfants;
