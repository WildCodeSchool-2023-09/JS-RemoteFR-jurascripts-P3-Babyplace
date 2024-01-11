import React, { useState } from "react";
import "../../styles/ReservationDashboard.scss";

function ReservationDashboard() {
  const [cards, setCards] = useState([
    {
      id: 1,
      babyName: "Nathan",
      age: "18mois",
      parentName: "Dan Scott",
      status: "En attente",
      arrival: "2024-01-01T07:00:00Z",
      departure: "2024-01-01T17:00:00Z",
      totalHours: "10h",
      totalPrice: "100€",
    },
    {
      id: 2,
      babyName: "Alice",
      age: "2ans",
      parentName: "Sarah Connor",
      status: "En attente",
      arrival: "2024-01-01T08:00:00Z",
      departure: "2024-01-01T17:00:00Z",
      totalHours: "9h",
      totalPrice: "90€",
    },
    {
      id: 3,
      babyName: "Bruno",
      age: "6mois",
      parentName: "John Doe",
      status: "En attente",
      arrival: "2024-01-01T09:00:00Z",
      departure: "2024-01-01T16:00:00Z",
      totalHours: "7h",
      totalPrice: "70€",
    },
    {
      id: 4,
      babyName: "Franck",
      age: "4ans",
      parentName: "Sarah Doe",
      status: "En attente",
      arrival: "2024-01-01T08:00:00Z",
      departure: "2024-01-01T11:00:00Z",
      totalHours: "4h",
      totalPrice: "40€",
    },
  ]);

  const [filter, setFilter] = useState("all");

  const handleStatusChange = (cardId, newStatus) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, status: newStatus } : card
      )
    );
  };

  const filteredCards = () => {
    if (filter === "accepted") {
      return cards.filter((card) => card.status === "Accepté");
    }
    if (filter === "rejected") {
      return cards.filter((card) => card.status === "Refusé");
    }
    if (filter === "pending") {
      return cards.filter((card) => card.status === "En attente");
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
            <p>Age: {card.age}</p>
            <p>Parent: {card.parentName}</p>
            <p>Status: {card.status}</p>
            <p>Arrivée: {new Date(card.arrival).toLocaleString()}</p>
            <p>Départ: {new Date(card.departure).toLocaleString()}</p>
            <p>Total Heures: {card.totalHours}</p>
            <p>Total Prix: {card.totalPrice}</p>
            {card.status === "En attente" && (
              <>
                <button
                  type="button"
                  className="btn-accept"
                  onClick={() => handleStatusChange(card.id, "Accepté")}
                >
                  Accepter
                </button>
                <button
                  type="button"
                  className="btn-reject"
                  onClick={() => handleStatusChange(card.id, "Refusé")}
                >
                  Refuser
                </button>
              </>
            )}
            {card.status === "Accepté" && (
              <button
                type="button"
                className="btn-modify"
                onClick={() => handleStatusChange(card.id, "modified")}
              >
                Modifier
              </button>
            )}
            {card.status === "Refusé" && (
              <button
                type="button"
                className="btn-modify"
                onClick={() => handleStatusChange(card.id, "modified")}
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
