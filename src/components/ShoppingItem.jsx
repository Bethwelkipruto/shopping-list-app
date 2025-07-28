import React from "react";

function ShoppingItem({ item, onDelete, onToggleBought }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>Price: Ksh {item.price}</p>
        <p>Status: {item.bought ? "✅ Bought" : "⏳ Not bought"}</p>
      </div>
      <div className="item-actions">
        <button 
          className="btn btn-primary" 
          onClick={() => onToggleBought(item.id, item.bought)}
        >
          {item.bought ? "Mark Unbought" : "Mark Bought"}
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ShoppingItem;