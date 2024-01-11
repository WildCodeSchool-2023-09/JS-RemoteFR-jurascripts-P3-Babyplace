import { Link } from "react-router-dom";
import "../styles/home.scss";
import { logo, home } from "../assets";

function Home() {
  return (
    <section className="homeContainer">
      <img className="logo" src={logo} alt="logo" />
      <h5 className="choiceConnection"> Vous êtes : </h5>
      <div className="buttons">
        <Link to="/parents/subscribe">
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
