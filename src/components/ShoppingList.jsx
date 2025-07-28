import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, deleteItem, toggleBought }) {
  return (
    <div className="main-content">
      <div className="shopping-list">
        <h2>🛍️ My Shopping List</h2>
        {items.length === 0 ? (
          <p>No items yet. Add some items to get started!</p>
        ) : (
          items.map(item => (
            <ShoppingItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
              onToggleBought={toggleBought}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ShoppingList;
