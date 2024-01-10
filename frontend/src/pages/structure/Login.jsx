import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connexion } from "../../assets";
import "../../styles/login.scss";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            profile: "Structure",
          }),
        }
      );

      if (response.status === 200) {
        const auth = await response.json();

        localStorage.setItem("auth", auth.token);

        navigate("/pro/dashboard");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <input
            className="inputConnexion"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="inputConnexion"
            type="password"
            placeholder="Mot de passe"
            ref={passwordRef}
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
            <a className="inscriptionLink" href="/pro/register">
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
