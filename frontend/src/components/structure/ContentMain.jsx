import React, { useState } from "react";
import "../../styles/contentMain.scss";

function ContentMain() {
  const [cards, setCards] = useState([
    {
      id: 1,
      babyName: "Alice",
      age: "2ans",
      parentName: "John Doe",
      status: "En attente",
      arrival: "2024-01-01T08:00:00Z",
      departure: "2024-01-01T17:00:00Z",
      totalHours: "9h",
      totalPrice: "90€",
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
                onClick={() => handleStatusChange(card.id, "accepted")}
              >
                Accept
              </button>
              <button
                type="button"
                className="btn-reject"
                onClick={() => handleStatusChange(card.id, "rejected")}
              >
                Reject
              </button>
            </>
          )}
          {card.status === "accepted" && (
            <button
              type="button"
              className="btn-modify"
              onClick={() => handleStatusChange(card.id, "modified")}
            >
              Modify Status
            </button>
          )}
          {card.status === "rejected" && (
            <button
              type="button"
              className="btn-modify"
              onClick={() => handleStatusChange(card.id, "modified")}
            >
              Modify Status
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContentMain;
