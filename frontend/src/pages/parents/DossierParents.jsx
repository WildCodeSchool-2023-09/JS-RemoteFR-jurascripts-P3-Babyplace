import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../../styles/dossierparents.scss";

function DossierParents() {
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
          <Link to="/parents/dossierenfant">Enfants</Link>
          <Link to="/parents/dossierparent">Parents</Link>
          <Link to="/parents/dossierinscription">Inscription</Link>
        </div>
      </div>

      <h2>Dossier Parents</h2>
      <div className="parentDoc_form">
        <form action="submit">
          <div className="parents">
            <h3>Parent 1</h3>
            <input
              type="text"
              id="lastname"
              name="lastename"
              placeholder="Nom"
            />{" "}
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Prénom"
            />
            <input
              type="text"
              id="jobname"
              name="jobname"
              placeholder="Profession"
            />
            <input
              type="tel"
              name="phonenumber"
              id="tel"
              placeholder="Téléphone portable"
            />
            <input type="email" name="email" placeholder="Mail" id="email" />
          </div>
          <div className="parents">
            <h3>Parent 2</h3>
            <input
              type="text"
              id="lastnom"
              name="lastename"
              placeholder="Nom"
            />{" "}
            <input
              type="text"
              id="fstname"
              name="firstname"
              placeholder="Prénom"
            />
            <input
              type="text"
              id="jbname"
              name="jobname"
              placeholder="Profession"
            />
            <input
              type="tel"
              id="tele"
              name="phonenumber"
              placeholder="Téléphone portable"
            />
            <input type="email" name="email" placeholder="Mail" id="mail" />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" id="send" />
      </div>
    </section>
  );
}

export default DossierParents;
