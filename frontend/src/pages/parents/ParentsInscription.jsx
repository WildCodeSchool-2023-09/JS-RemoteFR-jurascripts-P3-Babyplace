import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { home, logo } from "../../assets";
import "../../styles/parents_connexion.scss";

const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%_*?&-])[A-Za-z\d@!%_*?&-]{8,24}$/;

function ParentsInscription() {
  const emailRef = useRef();
  const errRef = useRef();

  // Etat pour le email et sa validation
  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  // États pour le mot de passe et la confirmation du mot de passe
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const result = MAIL_REGEX.test(mail);
    setValidMail(result);
  }, [mail]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setConfirmPassword(result);
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [mail, password]);

  const updateButton = () => {
    const button = document.getElementById("button");
    button.disabled = !confirmPassword;
    button.style.opacity = button.disabled ? 0.5 : 1;
  };

  useEffect(() => {
    updateButton();
  }, [confirmPassword]);

  // Hook pour la navigation
  const navigate = useNavigate();

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
      // const data = await response.json();
      // post parents via data.insertId
      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        navigate("/parents/connexion");
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
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form id="form_subscribe" onSubmit={handleSubmit}>
              <div>
                <label id="form-sub-mail" htmlFor="email_sub">
                  <span className={validMail ? "valid" : "hide"}>Correcte</span>
                  <span className={validMail || !mail ? "hide" : "invalid"}>
                    Incorrecte
                  </span>
                  <input
                    ref={emailRef}
                    autoComplete="off"
                    type="mail"
                    placeholder="Email"
                    id="email_sub"
                    name="email"
                    onChange={(e) => setMail(e.target.value)}
                    required
                    aria-invalid={validMail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setMailFocus(true)}
                    onBlur={() => setMailFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      mailFocus && mail && !validMail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    Doit contenir @ et .
                  </p>
                </label>{" "}
              </div>
              <div>
                {/* Champ pour le mot de passe */}
                <label id="form_pass" htmlFor="password_sub">
                  <span className={confirmPassword ? "valid" : "hide"}>
                    Correcte
                  </span>
                  <span
                    className={
                      confirmPassword || !password ? "hide" : "invalid"
                    }
                  >
                    Incorrecte
                  </span>
                  <input
                    type="password"
                    id="password_sub"
                    value={password}
                    name="password"
                    placeholder="Mot de Passe"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={confirmPassword ? "false" : "true"}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />{" "}
                  <p
                    id="pwdnote"
                    className={
                      passwordFocus && !confirmPassword
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    Un minimum de 8 caractères.
                    <br />
                    Doit inclure une lettre majuscule, un chiffre et un
                    caractère special (@!%_*?&-).
                    <br />
                  </p>
                </label>{" "}
              </div>
              {/* Bouton de soumission du formulaire */}
              <button className="parentConnexionBtn" id="button" type="submit">
                S'inscrire
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
      </div>
    </div>
  );
}

export default ParentsInscription;
