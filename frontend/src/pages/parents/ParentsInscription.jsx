import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/parents_connexion.scss";
import { logo, home } from "../../assets";

function ParentsInscription() {
  const emailRef = useRef();

  // États pour le mot de passe et la confirmation du mot de passe
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Gestionnaire de changement de la confirmation du mot de passe
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value.toString(),
            password,
            profile: "Parent",
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        navigate("/parents/rules");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <div className="parentConnexionContainer">
      <div className="parentContainer">
        <div className="titleParentConnexion">
          <img className="logoParent" src={logo} alt="logoParent" />
          <span className="parent">Je m'inscris sur BabyPlace</span>
        </div>
        <div className="spaceContainer">
          <h3 className="spaceConnexion">
            Vous avez déjà un compte ?{" "}
            <Link to="/parents/connexion">Cliquez-ici</Link>
          </h3>
          <section>
            <form onSubmit={handleSubmit}>
              <div>
                {/* Champ pour l'email */}
                <label htmlFor="email">email</label>{" "}
                <input
                  ref={emailRef}
                  autoComplete="off"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                {/* Champ pour le mot de passe */}
                <label htmlFor="password">password</label>{" "}
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />{" "}
                {/* Indicateur de force du mot de passe */}
                {password.length >= 8 ? "✅" : "❌"}{" "}
                {`length: ${password.length} >= 8`}
              </div>
              <div>
                {/* Champ pour la confirmation du mot de passe */}
                <label htmlFor="confirm-password">confirm password</label>{" "}
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />{" "}
                {/* Indicateur de correspondance avec le mot de passe */}
                {password === confirmPassword ? "✅" : "❌"}
              </div>
              {/* Bouton de soumission du formulaire */}
              <button className="parentConnexionBtn" id="button" type="submit">
                Connexion
              </button>
            </form>
          </section>
          <label id="form_check" className="checkboxCGU" htmlFor="checkbox">
            <input
              type="checkbox"
              className="input_check"
              name="checkbox"
              id="checkbox"
            />{" "}
            J'accepte les{" "}
            <a href="/NotFound">conditions générales d'utilisation.</a>
          </label>
        </div>
      </div>
      <div className="linksConnexion">
        <img className="imgConnexionParent" src={home} alt="imgparent" />
        <button className="parentConnexionBtn" id="button" type="submit">
          <Link to="/parents/rules">Connexion</Link>
        </button>
      </div>
    </div>
  );
}

export default ParentsInscription;
