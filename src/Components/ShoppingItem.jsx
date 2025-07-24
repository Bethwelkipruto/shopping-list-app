import React from "react";

function ShoppingItem({ item, onDelete, onToggleBought }) {
  return (
    <div
      className="item-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <img src={item.image} alt={item.name} style={{ width: "100px" }} />
      <h3>{item.name}</h3>
      <p>Price:  ksh{item.price}</p>
      <p>Status: {item.bought ? "Bought" : "Not bought"}</p>

      <button onClick={() => onToggleBought(item.id, item.bought)}>
        {item.bought ? "Mark as Unbought" : "Mark as Bought"}
      </button>

      <button
        onClick={() => onDelete(item.id)}
        style={{
          marginLeft: "10px",
          backgroundColor: "tomato",
          color: "white",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ShoppingItem;
