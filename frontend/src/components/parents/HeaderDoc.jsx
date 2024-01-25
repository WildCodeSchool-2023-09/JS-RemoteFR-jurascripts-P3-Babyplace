import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../../styles/headerDoc.scss";

function HeaderDoc() {
  return (
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
  );
}

export default HeaderDoc;
