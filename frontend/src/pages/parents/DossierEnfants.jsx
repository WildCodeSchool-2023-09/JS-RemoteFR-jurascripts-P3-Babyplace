import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiLinksFill } from "react-icons/ri";
import NavBar from "../../components/parents/NavBar";

function DossierEnfants() {
  return (
    <section>
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
      <div className="child_doc">
        <h2>Dossier enfants</h2>

        <div className="formfil">
          <button type="button">Bébé Cannan 1</button>
          <button type="button">Bébé Cannan 2</button>
          <button type="button">Bébé Cannan 3</button>
          <form action="">
            <div>
              <input type="checkbox" /> <input type="text" placeholder="Nom" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Prénom" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Date de Naissance" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Marcheur / Non Marcheur" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Allergies" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Attestation d'assurance" />
              <RiLinksFill />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Carnet de santé / Vaccination" />
              <RiLinksFill />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input
                type="text"
                placeholder="Acte de naissance / ou certificat de grossesse"
              />
              <RiLinksFill />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Médecin traitant" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input
                type="text"
                placeholder="Certificat d'aptitude à l'acceuil collectif"
              />
              <RiLinksFill />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input
                type="text"
                placeholder="Autorisation de soin et d'hospitalisation"
              />
              <RiLinksFill />
            </div>
          </form>
        </div>
      </div>
      <NavBar />
    </section>
  );
}

export default DossierEnfants;
