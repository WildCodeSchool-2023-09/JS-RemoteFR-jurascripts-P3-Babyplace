import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/headerDoc.scss";
import axios from "axios";

function HeaderDoc() {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/parents/1`)
      .then((res) => {
        const result = res.data;
        setName(result);
        console.info(result);
      })
      .catch((error) => {
        console.error("Chargement de données compromis:", error);
      });
  }, []);

  return (
    <section className="parent_box">
      <div className="parent">
        <h1>
          {name.first_name} {name.last_name}
          <span>Papa Poule</span>
        </h1>
      </div>
      <div className="linksTo">
        <Link to="/parents/dossierenfant">Enfants</Link>
        <Link to="/parents/dossierparent">Parents</Link>
        <Link to="/parents/dossierinscription">Inscription</Link>
      </div>
    </section>
  );
}

export default HeaderDoc;
