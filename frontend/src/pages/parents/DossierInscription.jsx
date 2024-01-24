import { FaLessThan } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../styles/dossierInscription.scss";

function DossierInscription() {
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
          <Link to="/parents/dossierenfant" className="link">
            Enfants
          </Link>
          <Link to="/parents/dossierparent" className="link">
            Parents
          </Link>
          <Link to="/parents/dossierinscription" className="link">
            Inscription
          </Link>
        </div>
      </div>
      <h2>Dossier d'inscription</h2>
      <div className="Inscription_doc">
        <form action="submit">
          <div>
            <GrValidate />
            <input
              type="text"
              placeholder="Justificatif de revenu (moins de 3 moins)"
            />
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input
              type="text"
              placeholder="Déclaration de revenu (année en cours)"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input type="number" placeholder="Numéro de la caf" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input
              type="number"
              placeholder="Numéro de sécurité sociale"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input type="text" placeholder="Justificdati de domicile" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input
              type="text"
              placeholder="Justificatif de situation professionnelles"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input type="text" placeholder="RIB" /> <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input type="text" placeholder="Autorisation photo et vidéo" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input type="text" placeholder="Autorisation de sortie" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input type="text" placeholder="Copie livret de famille" />{" "}
            <MdChevronRight />
          </div>
          <div>
            <GrValidate />
            <input
              type="text"
              placeholder="Copie du jugement de divorce"
            />{" "}
            <MdChevronRight />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" />
      </div>
    </section>
  );
}

export default DossierInscription;
