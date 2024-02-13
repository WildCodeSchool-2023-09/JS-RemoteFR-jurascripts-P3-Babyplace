import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { edit, refusal, success } from "../../assets";
import "../../styles/ReservationDashboard.scss";

function ReservationDashboard() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/listofrequests`)
      .then((response) => {
        const result = response.data;
        setCards(result);
      })
      .catch((error) => {
        console.error("Erreur de la récupération des reservations:", error);
      });
  }, []);

  const handleUpdateCardStatus = (cardId, newStatus) => {
    let newStatusValue = newStatus;

    if (newStatus === "modified") {
      newStatusValue = "waiting";
    }
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/reservation/${cardId}`, {
        status: newStatusValue,
      })
      .then(() => {
        const updatedCards = cards.map((card) =>
          card.id === cardId ? { ...card, status: newStatusValue } : card
        );
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du statut:", error);
      });
  };

  const filteredCards = () => {
    if (filter === "accepted") {
      return cards.filter((card) => card.status === "accepted");
    }
    if (filter === "rejected") {
      return cards.filter((card) => card.status === "refused");
    }
    if (filter === "pending") {
      return cards.filter((card) => card.status === "waiting");
    }
    return cards;
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="content-main">
      <div className="filters-btn">
        <span className="filters-title">Toutes les réservations :</span>
        <button type="button" onClick={() => changeFilter("all")}>
          Toutes
        </button>
        <button type="button" onClick={() => changeFilter("pending")}>
          Demandes en attente
        </button>
        <button type="button" onClick={() => changeFilter("accepted")}>
          Acceptées
        </button>
        <button type="button" onClick={() => changeFilter("rejected")}>
          Refusées
        </button>
      </div>
      <div className="cards-ctn">
        {filteredCards().map((card) => (
          <div className={`card ${card.status}`} key={card.id}>
            <h3>{card.babyName}</h3>
            <p>
              Enfant: <span className="color-status">{card.childName}</span>
            </p>
            <p>
              Parent: <span className="color-status">{card.parentName}</span>
            </p>
            <p>
              Status:{" "}
              <span className={`color-status ${card.status}`}>
                {" "}
                {card.status}{" "}
              </span>{" "}
            </p>
            <p>
              Date:{" "}
              <span className="color-status">
                {moment(card.reservationDateStart).format("YYYY-MM-DD")}
              </span>
            </p>
            <p>
              Heure d'arrivée:{" "}
              <span className="color-status">
                {moment(card.startTime, "HH:mm:ss").format("HH:mm")}
              </span>
            </p>
            <p>
              Heure de départ:{" "}
              <span className="color-status">
                {" "}
                {moment(card.endTime, "HH:mm:ss").format("HH:mm")}
              </span>
            </p>
            <p>
              Total Prix: <span className="color-status">{card.prices} €</span>
            </p>
            {card.status === "waiting" && (
              <div className="btn_accept_refuse">
                <button
                  type="button"
                  className="btn-accept"
                  onClick={() => handleUpdateCardStatus(card.id, "accepted")}
                >
                  <img className="icon-button" src={success} alt="accepted" />{" "}
                  Accepter
                </button>
                <button
                  type="button"
                  className="btn-reject"
                  onClick={() => handleUpdateCardStatus(card.id, "refused")}
                >
                  <img className="icon-button" src={refusal} alt="refused" />
                  Refuser
                </button>
              </div>
            )}
            {card.status === "accepted" && (
              <button
                type="button"
                className="btn-modify"
                onClick={() => handleUpdateCardStatus(card.id, "modified")}
              >
                <img className="icon-button" src={edit} alt="refused" />
                Modifier
              </button>
            )}
            {card.status === "refused" && (
              <button
                type="button"
                className="btn-modify"
                onClick={() => handleUpdateCardStatus(card.id, "modified")}
              >
                <img className="icon-button" src={edit} alt="refused" />
                Modifier
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReservationDashboard;
