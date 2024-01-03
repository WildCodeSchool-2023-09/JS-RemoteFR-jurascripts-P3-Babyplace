import React, { useState } from "react";
import "../../styles/contentMain.scss";

function ContentMain() {
  const [cards, setCards] = useState([
    {
      id: 1,
      babyName: "Nathan",
      age: "18mois",
      parentName: "Dan Scott",
      status: "En attente",
      arrival: "2024-01-01T08:00:00Z",
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
      arrival: "2024-01-01T08:00:00Z",
      departure: "2024-01-01T17:00:00Z",
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
      departure: "2024-01-01T17:00:00Z",
      totalHours: "4h",
      totalPrice: "40€",
    },
  ]);

  const handleStatusChange = (cardId, newStatus) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, status: newStatus } : card
      )
    );
  };

  return (
    <div className="content-main">
      {cards.map((card) => (
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
  );
}

export default ContentMain;
