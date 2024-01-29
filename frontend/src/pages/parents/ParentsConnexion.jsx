import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { home, logo } from "../../assets";
import "../../styles/parents_connexion.scss";

function ParentsConnexion() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [validPwd, setValidPwd] = useState(false);

  const updateButton = () => {
    const button = document.getElementById("button");
    if (button) {
      button.disabled = !validPwd;
      button.style.opacity = button.disabled ? 0.5 : 1;
    }
  };

  useEffect(() => {
    updateButton();
  }, [validPwd]);

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
        localStorage.setItem("parentToken", auth.token);

        navigate("/parents/rules", { replace: true });
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
                <label id="form-co-mail" htmlFor="email-co">
                  {" "}
                  <input
                    ref={emailRef}
                    autoComplete="on"
                    type="mail"
                    id="email-co"
                    placeholder="Email"
                    required
                    aria-describedby="uidnote"
                  />
                </label>
              </div>
              <div>
                <label id="form-co-pass" htmlFor="password-co">
                  {" "}
                  <input
                    type="password"
                    id="password-co"
                    autoComplete="on"
                    placeholder="Mot de Passe"
                    ref={passwordRef}
                    onChange={(e) => setValidPwd(e.target.value)}
                  />
                </label>
              </div>
              <button
                className="parentConnexionBtn"
                id="button"
                type="submit"
                disabled={!validPwd}
              >
                Connexion
              </button>
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
