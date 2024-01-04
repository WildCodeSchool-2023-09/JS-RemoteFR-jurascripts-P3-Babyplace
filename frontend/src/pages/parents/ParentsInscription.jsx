import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/parents_connexion.scss";
import { logo, home } from "../../assets";

const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_-]).{8,23}$/;

function ParentsInscription() {
  const mailRef = useRef();
  const errRef = useRef();

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    mailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = MAIL_REGEX.test(mail);
    setValidMail(result);
  }, [mail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [mail, pwd]);

  const updateButton = () => {
    const button = document.getElementById("button");
    button.disabled = !validPwd;
    button.style.opacity = button.disabled ? 0.5 : 1;
  };

  useEffect(() => {
    updateButton();
  }, []);

  useEffect(() => {
    updateButton();
  }, [pwd, mail]);

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
            <form id="form_subscribe">
              <label id="form_sub" htmlFor="mail_subscribe">
                <span className={validMail ? "valid" : "hide"}>Correct</span>
                <span className={validMail || !mail ? "hide" : "invalid"}>
                  Incorrect
                </span>
                <input
                  type="mail"
                  id="mail_subscribe"
                  name="mail"
                  placeholder="Email"
                  ref={mailRef}
                  autoComplete="off"
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
              </label>

              <label id="form_pass" htmlFor="password_sub">
                <span className={validPwd ? "valid" : "hide"}>Correct</span>
                <span className={validPwd || !mail ? "hide" : "invalid"}>
                  Incorrect
                </span>
                <input
                  type="password"
                  id="password_sub"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  8 à 24 caractères.
                  <br />
                  Doit inclure une lettre majuscule, un chiffre et un caractère
                  special
                  <br />
                </p>
              </label>
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
