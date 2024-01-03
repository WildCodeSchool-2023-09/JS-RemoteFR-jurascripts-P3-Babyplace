import "../../styles/parents_tutorials.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tutorial from "../../constants/dataGen";
import { logo, parents } from "../../assets";

function ParentsTutorial() {
  const [tutorialText, setTutorialText] = useState(0);

  const handleNextClick = () => {
    const nextText = (tutorialText + 1) % tutorial.length;
    setTutorialText(nextText);
  };

  return (
    <div className="parentTutorialContainer">
      <div className="parentContainer">
        <img className="imgConnexionParent1" src={parents} alt="imgparent" />
        <img className="imgConnexionParent2" src={logo} alt="imgparent" />
      </div>
      <div className="parentTutorial">
        <h1 className="parentTitle">Garde d’enfant à la demande</h1>
        <p className="parentsObject">{tutorial[tutorialText].text}</p>
      </div>
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
