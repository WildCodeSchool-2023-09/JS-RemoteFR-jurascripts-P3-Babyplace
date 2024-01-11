import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavBar from "../../components/parents/NavBar";
import "../../styles/dossierInscription.scss";

function DossierInscription() {
  const [load, setLoad] = useState(false);

  const handlUpdate = (e) => {
    if (e.target.files.lenght > 0) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  };

  const validPress = (e) => {
    if (e.key === "Enter") {
      setLoad(true);
    }
  };

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
      <div className="Inscription_doc">
        <h2>Dossier d'inscription</h2>

        <div className="formfil">
          <form action="submit">
            <div>
              <input type="checkbox" checked={load} />{" "}
              <input
                type="file"
                placeholder="Justificatif de revenu (moins de 3 moins)"
                onChange={handlUpdate}
              />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input
                type="file"
                placeholder="Déclaration de revenu (année en cours)"
              />
            </div>
            <div>
              <input
                type="checkbox"
                checked={load}
                onChange={() => setLoad(!load)}
              />{" "}
              <input
                type="number"
                placeholder="Numéro de la caf"
                onKeyDown={validPress}
              />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="number" placeholder="Numéro de sécurité sociale" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="file" placeholder="Justificdati de domicile" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input
                type="file"
                placeholder="Justificatif de situation professionnelles"
              />
            </div>
            <div>
              <input type="checkbox" /> <input type="file" placeholder="RIB" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Autorisation photo et vidéo" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Autorisation de sortie" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Copie livret de famille" />
            </div>
            <div>
              <input type="checkbox" />{" "}
              <input type="text" placeholder="Copie du jugement de divorce" />
            </div>
          </form>
        </div>
      </div>
      <NavBar />
    </section>
  );
}

export default DossierInscription;
