import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, deleteItem, toggleBought }) {

return (
<div>
<h2>🛍️ My Shopping List</h2>

{items.length === 0 ? (
<p>No items yet. Make sure your json-server is running on port 3001.</p>
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
);
}

export default ShoppingList;
