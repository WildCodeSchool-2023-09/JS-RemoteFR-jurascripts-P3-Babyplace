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
          <FaLessThan className="icon" />
          <h1>
            Ed Cannan
            <span>Papa Poule</span>
          </h1>
        </div>
        <div className="linksTo">
          <Link to="/parents/dossierenfants">Enfants</Link>
          <Link to="/parents/dossierparents">Parents</Link>
          <Link to="/parents/dossierinscription">Inscription</Link>
        </div>
      </div>

      <h2>Dossier Parents</h2>
      <div className="parentDoc_form">
        <form action="submit">
          <div className="parents">
            <h3>Parent 1</h3>
            <input type="text" name="lastename" placeholder="Nom" />{" "}
            <input type="text" name="firstname" placeholder="Prénom" />
            <input type="text" name="jobname" placeholder="Profession" />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Téléphone portable"
            />
            <input type="email" name="email" placeholder="Mail" />
          </div>
          <div className="parents">
            <h3>Parent 2</h3>
            <input type="text" name="lastename" placeholder="Nom" />{" "}
            <input type="text" name="firstname" placeholder="Prénom" />
            <input type="text" name="jobname" placeholder="Profession" />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Téléphone portable"
            />
            <input type="email" name="email" placeholder="Mail" />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" />
      </div>
      <NavBar />
    </section>
  );
}

export default DossierParents;
