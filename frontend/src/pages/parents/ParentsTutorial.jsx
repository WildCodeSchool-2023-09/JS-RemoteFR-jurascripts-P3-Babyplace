import "../../styles/parents_tutorials.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, home } from "../../assets";

function ParentsTutorial() {
  const [nextText, setNextText] = useState(false);

  const tutorialNext = `Réservez une place en moins de 
60 secondes et obtenez une solution 
de garde, même pour le lendemain !`;

  const handleNextClick = () => {
    setNextText(true);
  };

  return (
    <div className="parentTutorialContainer">
      <div className="parentContainer">
        <img className="imgConnexionParent1" src={home} alt="imgparent" />
        <img className="imgConnexionParent2" src={logo} alt="imgparent" />
      </div>
      {tutorialNext.map((text) => (
        <div key={text} className="parentTutorial">
          <h1 className="parentTitle">Garde d’enfant à la demande</h1>
          {nextText ? (
            <p className="parentsObject">{text}</p>
          ) : (
            <p className="parentsObject">
              Trouver un.e professionnel.le de la garde d’enfant
            </p>
          )}
        </div>
      ))}

      <div className="parentButton">
        <button className="previous" type="submit">
          <Link to="/parents/rules">Passer</Link>
        </button>
        <div className="next">
          Suivant
          <button className="btn" type="submit" onClick={handleNextClick}>
            <Link to="/parents/rules">&gt;</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentsTutorial;
