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
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
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

  const navigate = useNavigate();

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
            profile: "Parent",
          }),
        }
      );

      if (response.status === 201) {
        const userData = await response.json();
        console.info(userData);

        const parentResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/parents`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userData.insertId,
              firstName: firstNameRef.current.value.toString(),
              lastName: lastNameRef.current.value.toString(),
              email: emailRef.current.value.toString(),
            }),
          }
        );

        if (parentResponse.status === 201) {
          navigate("/parents/connexion");
        } else {
          console.info(parentResponse);
        }
      } else {
        console.info(response);
      }
    } catch (err) {
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
              <input
                ref={firstNameRef}
                type="text"
                autoComplete="off"
                id="firstname"
                placeholder="Prénom"
                required
              />
              <input
                ref={lastNameRef}
                type="text"
                autoComplete="off"
                id="lastname"
                placeholder="Nom"
                required
              />
              <label id="form-sub-mail" htmlFor="email">
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
              <label id="form_pass" htmlFor="password">
                <span className={confirmPassword ? "valid" : "hide"}>
                  Correcte
                </span>
                <span
                  className={confirmPassword || !password ? "hide" : "invalid"}
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
                  Doit inclure une lettre majuscule, un chiffre et un caractère
                  special (@!%_*?&-).
                  <br />
                </p>
              </label>
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
