import React from "react";
import HeaderDoc from "../../components/parents/HeaderDoc";
import "../../styles/dossierparents.scss";

function DossierParents() {
  return (
    <section className="InscriptionDoc">
      <HeaderDoc />
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
