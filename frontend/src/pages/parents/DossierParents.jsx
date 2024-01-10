import React from "react";
import { Link } from "react-router-dom";
import { infe } from "../../assets/parents/creche";
import NavBar from "../../components/parents/NavBar";

function DossierParents() {
  return (
    <>
      <div className="parent">
        <img src={infe} alt="icone " />
        <h1>Ed Cannan</h1>
        <span>Papa Poule</span>
      </div>
      <div className="links">
        <Link to="/parents/dossierenfants">Enfants</Link>
        <Link to="/parents/dossierparents">Parents</Link>
        <Link to="/parents/dossierinscription">Inscription</Link>
      </div>

      <div className="parentDoc_form">
        <form action="">
          <div className="parent1">
            <h3>Parent 1</h3>
            <input type="text" placeholder="Nom" />{" "}
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Profession" />
            <input type="tel" placeholder="Téléphone portable" />
            <input type="email" placeholder="Mail" />
          </div>
          <div className="parent2">
            <h3>Parent 2</h3>
            <input type="text" placeholder="Nom" />{" "}
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Profession" />
            <input type="tel" placeholder="Téléphone portable" />
            <input type="email" placeholder="Mail" />
          </div>
        </form>

        <span>+ADRESSE</span>
        <NavBar />
      </div>
    </>
  );
}

export default DossierParents;
