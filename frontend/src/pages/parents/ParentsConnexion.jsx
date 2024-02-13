import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
            profile: "Parent",
          }),
        }
      );

      if (response.status === 200) {
        const auth = await response.json();
        localStorage.setItem("parentToken", auth.token);
        localStorage.setItem("parentId", auth.parentId);
        localStorage.setItem("user", JSON.stringify(auth.user));
        localStorage.setItem("parent", JSON.stringify(auth.parent));

        window.location.href = "/parents/rules";
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
