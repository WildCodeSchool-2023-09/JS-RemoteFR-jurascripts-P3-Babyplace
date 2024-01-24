import { Link } from "react-router-dom";
import { home, logo } from "../assets";
import "../styles/home.scss";

function Home() {
  return (
    <section className="homeContainer">
      <img className="logo" src={logo} alt="logo" />
      <h5 className="choiceConnection"> Vous êtes : </h5>
      <div className="buttons">
        <Link to="/parents/connexion">
          <button type="button" className="espaceBtn">
            Un parent
          </button>
        </Link>

        <Link to="/pro/login">
          <button type="button" className="espaceBtn">
            Une structure
          </button>
        </Link>
      </div>
      <img className="imgConnexion" src={home} alt="connexion" />
    </section>
  );
}

export default Home;
