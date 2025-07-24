import React from "react";

function ShoppingItem({ item, onDelete, onToggleBought }) {
  const { id, name, price, image, bought } = item;

  return (
    <div
      className="item-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {/* ✅ Only show image if available */}
      {image ? (
        <img
          src={image}
          alt={name}
          style={{ width: "100px", borderRadius: "8px" }}
        />
      ) : (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          No image
        </div>
      )}

      <h3>{name}</h3>
      <p>Price: ksh{price}</p>
      <p>Status: {bought ? "Bought" : "Not bought"}</p>

      <button onClick={() => onToggleBought(id, bought)}>
        {bought ? "Mark as Unbought" : "Mark as Bought"}
      </button>

      <button
        onClick={() => onDelete(id)}
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
