import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connexion } from "../../assets";
import "../../styles/register.scss";

function Register() {
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value.toString(),
            password,
            profile: "Structure",
          }),
        }
      );

      if (response.status === 201) {
        navigate("/pro/login");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="structureInscriptionContainer">
        <div className="leftContainer">
          <div className="titleStructureInscription">
            <h1>Baby Place</h1>
            <span className="pro">PRO</span>
          </div>
          <p className="subtitleStructureInscription">
            Gérez votre agenda professionnel
          </p>
          <p className="dhInscription">24h/24 et 7j/7</p>
          <img
            className="imgInscriptionStructure"
            src={connexion}
            alt="inscription"
          />
        </div>
        <div className="rightContainer">
          <h3 className="spaceInscription"> Inscription à mon espace </h3>
          <input
            className="inputInscription"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="inputInscription"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            className="inputInscription"
            type="password"
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />{" "}
          <label className="checkboxCGU">
            <input type="checkbox" /> J'accepte les{" "}
            <a href="/NotFound">conditions générales d'utilisation.</a>
          </label>
          <button className="structureInscriptionBtn" type="submit">
            S'inscrire
          </button>
          <div className="linksInscription"> </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
