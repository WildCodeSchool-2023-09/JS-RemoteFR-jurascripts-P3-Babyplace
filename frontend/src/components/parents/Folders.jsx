import NavBar from "./NavBar";
import { avatar } from "../../assets";
import "../../styles/folders.scss";

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
        <div className="children">
          <p>
            Dossier <br /> Enfants
          </p>{" "}
          <span>
            70% <br /> complété{" "}
          </span>
        </div>
        <div className="parents">
          <p>
            Dossier <br /> Parents
          </p>{" "}
          <span>
            50% <br /> complété{" "}
          </span>
        </div>
        <div className="inscription">
          <p>
            Dossier <br /> d'inscription
          </p>{" "}
          <span>
            40% <br /> complété{" "}
          </span>
        </div>

        <button type="button">Envoyer</button>
      </section>
      <NavBar />
    </>
  );
}

export default Folders;
