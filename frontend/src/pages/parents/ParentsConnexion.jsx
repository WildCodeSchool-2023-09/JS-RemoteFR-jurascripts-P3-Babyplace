import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../../styles/parents_connexion.scss";
import { logo, home } from "../../assets";

function ParentsConnexion() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            profile: "Parent",
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const auth = await response.json();
        // stocker le token dans le local storage
        localStorage.setItem("userToken", auth.token);

        navigate("/parents/creche", { replace: true });
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
          <span className="parent">Me connecter sur BabyPlace</span>
        </div>
        <div className="spaceContainer">
          <h3 className="spaceConnexion">
            Vous n'avez pas de compte ?{" "}
            <Link to="/parents/subscribe">Cliquez-ici</Link>
          </h3>
          <section>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">email</label>{" "}
                <input
                  ref={emailRef}
                  autoComplete="off"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="password">password</label>{" "}
                <input type="password" id="password" ref={passwordRef} />
              </div>
              <div className="linksConnexion">
                <button
                  className="parentConnexionBtn"
                  id="button"
                  type="submit"
                >
                  Connexion
                </button>
              </div>
            </form>
          </section>
          <label id="form_connexion" className="checkboxCGU">
            <input type="checkbox" id="checkbox" />
            Se souvenir de votre mot de passe
          </label>
        </div>
      </div>
      <div className="linksConnexion">
        <img className="imgConnexionParent" src={home} alt="imgparent" />
      </div>
    </div>
  );
}

export default ParentsConnexion;
