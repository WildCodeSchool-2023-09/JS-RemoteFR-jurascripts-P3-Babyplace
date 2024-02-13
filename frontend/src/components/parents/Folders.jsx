/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { avatar } from "../../assets";
import "../../styles/folders.scss";
import NavBar from "./NavBar";

function Folders() {
  const [reservationStatus, setReservationStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/reservation/${id}/status`)
        .then((response) => {
          setReservationStatus(response.data.status);
        })
        .catch((error) =>
          console.error("Error fetching reservation status:", error)
        );
    }
  }, [id]);

  const handleUpdateStatusClick = (event) => {
    event.preventDefault();
    if (id) {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/api/reservation/${id}/status`,
          { status: "waiting" }
        )
        .then((response) => {
          setReservationStatus("waiting");
        })
        .catch((error) => {
          console.error("Error updating reservation status:", error);
        });
    }
  };

  return (
    <>
      <section className="folders">
        <img src={avatar} alt="a man who smile" />
        <h2>
          Charles Proust <br /> Papa Poule
        </h2>
        <h3>Mettez toutes les chances de votre côté</h3>
        <p className="profile_sentence">
          Un profil complet est nécéssaire pour un accueil en crèche
        </p>
        <Link to={`/parents/dossierenfant/${id}`}>
          <div className="children">
            <p>
              Dossier <br /> Enfants
            </p>{" "}
            <span>
              10% <br /> complété{" "}
            </span>
          </div>
        </Link>
        <Link to={`/parents/dossierparent/${id}`}>
          <div className="parents">
            <p>
              Dossier <br /> Parents
            </p>{" "}
            <span>
              20% <br /> complété{" "}
            </span>
          </div>
        </Link>
        <Link to={`/parents/dossierinscription/${id}`}>
          <div className="inscription">
            <p>
              Dossier <br /> d'inscription
            </p>{" "}
            <span>
              10% <br /> complété{" "}
            </span>
          </div>
        </Link>

        <button type="submit" onClick={handleUpdateStatusClick}>
          Envoyer
        </button>
      </section>
      <NavBar />
    </>
  );
}

export default Folders;
