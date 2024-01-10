import React from "react";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";
import NavBar from "../../components/parents/NavBar";
import "../../styles/dossierparents.scss";

function DossierParents() {
  return (
    <section>
      <div className="parent_box">
        <div className="parent">
          <FaLessThan className="less" />
          <div className="parent_container">
            <h1>Ed Cannan</h1>
            <span>Papa Poule</span>
          </div>
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

      <div className="parentDoc_form">
        <h2>Dossier Parents</h2>
        <form action="">
          <div className="parents">
            <h3>Parent 1</h3>
            <input type="text" placeholder="Nom" />{" "}
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Profession" />
            <input type="tel" placeholder="Téléphone portable" />
            <input type="email" placeholder="Mail" />
          </div>
          <div className="parents">
            <h3>Parent 2</h3>
            <input type="text" placeholder="Nom" />{" "}
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Profession" />
            <input type="tel" placeholder="Téléphone portable" />
            <input type="email" placeholder="Mail" />
          </div>
        </form>
        <p>+ADRESSE</p>
      </div>
      <NavBar />
    </section>
  );
}

export default DossierParents;
