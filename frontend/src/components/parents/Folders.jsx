import { Link } from "react-router-dom";
import { avatar } from "../../assets";
import "../../styles/folders.scss";
import NavBar from "./NavBar";

function Folders() {
  return (
    <>
      <section className="folders">
        <img src={avatar} alt="a man who smile" />
        <h2>
          Satoru Gojo <br /> Papa Poule
        </h2>
        <h3>Mettez toutes les chances de votre côté</h3>
        <p className="profile_sentence">
          Un profil complet est nécéssaire pour un accueil en crèche
        </p>
        <Link to="/parents/dossierenfant">
          <div className="children">
            <p>
              Dossier <br /> Enfants
            </p>{" "}
            <span>
              70% <br /> complété{" "}
            </span>
          </div>
        </Link>
        <Link to="/parents/dossierparent">
          <div className="parents">
            <p>
              Dossier <br /> Parents
            </p>{" "}
            <span>
              50% <br /> complété{" "}
            </span>
          </div>
        </Link>
        <Link to="/parents/dossierinscription">
          <div className="inscription">
            <p>
              Dossier <br /> d'inscription
            </p>{" "}
            <span>
              40% <br /> complété{" "}
            </span>
          </div>
        </Link>

        <button type="button">Envoyer</button>
      </section>
      <NavBar />
    </>
  );
}

export default Folders;
