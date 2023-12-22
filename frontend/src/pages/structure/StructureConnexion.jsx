import "../../styles/structure_connexion.scss";
import { connexion } from "../../assets";

function StructureConnexion() {
  return (
    <div className="structureConnexionContainer">
      <div className="leftContainer">
        <div className="titleStructureConnexion">
          <h1>Baby Place</h1>
          <span className="pro">PRO</span>
        </div>
        <p className="subtitleStructureConnexion">
          Gérez votre agenda professionnel
        </p>
        <p className="dhConnexion">24h/24 et 7j/7</p>
        <img
          className="imgConnexionStructure"
          src={connexion}
          alt="connexion"
        />
      </div>
      <div className="rightContainer">
        <h3 className="spaceConnexion"> Connexion à mon espace </h3>
        <input className="inputConnexion" type="email" placeholder="Email" />
        <input
          className="inputConnexion"
          type="password"
          placeholder="Mot de passe"
        />
        <label className="checkboxCGU">
          <input type="checkbox" /> J'accepte les{" "}
          <a href="/NotFound">conditions générales d'utilisation.</a>
        </label>
        <button className="structureConnexionBtn" type="submit">
          Se connecter
        </button>
        <div className="linksConnexion">
          <a className="forgetPwdLink" href="/NotFound">
            Mot de passe oublié ?
          </a>
          <a className="inscriptionLink" href="/NotFound">
            S'inscrire
          </a>
        </div>
      </div>
    </div>
  );
}

export default StructureConnexion;
