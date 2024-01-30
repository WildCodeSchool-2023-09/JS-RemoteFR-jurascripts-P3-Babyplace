import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, parents } from "../../assets";
import { tutorial } from "../../constants/dataGen";
import "../../styles/parents_tutorials.scss";

function ParentsTutorial() {
  const [tutorialText, setTutorialText] = useState(0);
  const [profile, setProfile] = useState({ sub: 0 });
  useEffect(() => {
    const token = localStorage.getItem("parentToken");
    if (token) {
      setProfile(jwtDecode(token));
    }
  }, []);

  const handleNextClick = () => {
    setTutorialText(tutorialText + 1);
  };

  return (
    <div className="parentTutorialContainer">
      <div className="parentContainer">
        <img className="imgConnexionParent1" src={parents} alt="imgparent" />
        <img className="imgConnexionParent2" src={logo} alt="imgparent" />
      </div>
      <div className="parentTutorial">
        <h1 className="parentTitle">Garde d'enfant à la demande</h1>
      </div>
      <div className="parentsObject">
        <p className="parentsText">{tutorial[tutorialText].text}</p>
        <div className="parentButton">
          <button className="previous" type="submit">
            <Link to={`/parents/profile/${profile.sub}`}>Passer</Link>
          </button>
          <div className="next">
            Suivant
            {tutorialText < 1 ? (
              <button className="btn" type="submit" onClick={handleNextClick}>
                &gt;
              </button>
            ) : (
              <Link to={`/parents/profile/${profile.sub}`}>
                <button className="btn" type="submit">
                  &gt;
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentsTutorial;
