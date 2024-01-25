import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/ReservationDashboard.scss";

function ReservationDashboard() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/listofrequests`)
      .then((response) => {
        const result = response.data;
        //----------------------------------------------------------------------------
        console.info("get table resa", result);
        //----------------------------------------------------------------------------
        setCards(result);
      })
      .catch((error) => {
        console.error("Erreur de la récupération des reservations:", error);
      });
  }, []);
  // console.info("tableau cards", cards);

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
        <button type="button" onClick={() => changeFilter("all")}>
          Tous
        </button>
        <button type="button" onClick={() => changeFilter("pending")}>
          Demande en Attente
        </button>
        <button type="button" onClick={() => changeFilter("accepted")}>
          Accepté
        </button>
        <button type="button" onClick={() => changeFilter("rejected")}>
          Refusé
        </button>
      </div>
      <div className="cards-ctn">
        {filteredCards().map((card) => (
          <div className={`card ${card.status}`} key={card.id}>
            <h3>{card.babyName}</h3>
            <p>Enfant: {card.childName}</p>
            <p>Parent: {card.parentName}</p>
            <p>Status: {card.status}</p>
            <p>Date: {card.reservationDateStart.split("T")[0]}</p>
            <p>Heure d'arrivée: {card.startTime}</p>
            <p>Heure de départ: {card.endTime}</p>
            <p>Total Heures: {card.totalHours}</p>
            <p>Total Prix: {card.totalPrice}</p>
            {card.status === "waiting" && (
              <>
                <button
                  type="button"
                  className="btn-accept"
                  onClick={() => handleUpdateCardStatus(card.id, "accepted")}
                >
                  Accepter
                </button>
                <button
                  type="button"
                  className="btn-reject"
                  onClick={() => handleUpdateCardStatus(card.id, "refused")}
                >
                  Refuser
                </button>
              </>
            )}
            {card.status === "accepted" && (
              <button
                type="button"
                className="btn-modify"
                onClick={() => handleUpdateCardStatus(card.id, "modified")}
              >
                Modifier
              </button>
            )}
            {card.status === "refused" && (
              <button
                type="button"
                className="btn-modify"
                onClick={() => handleUpdateCardStatus(card.id, "modified")}
              >
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
