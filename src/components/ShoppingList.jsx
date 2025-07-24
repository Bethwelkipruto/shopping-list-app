import React, { useEffect, useState } from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList() {
const [items, setItems] = useState([]);


useEffect(() => {
fetch("http://localhost:3001/items")
.then(res => res.json())
.then(data => {
console.log("Fetched data:", data); 
setItems(data);
});
}, []);


const handleDelete = (id) => {
fetch(`http://localhost:3001/items/${id}`, {
method: "DELETE"
}).then(() => {
setItems(prevItems => prevItems.filter(item => item.id !== id));
});
};


const handleToggleBought = (id, currentStatus) => {
fetch(`http://localhost:3001/items/${id}`, {
method: "PATCH",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ bought: !currentStatus })
})
.then(res => res.json())
.then(updatedItem => {
setItems(prevItems =>
prevItems.map(item =>
item.id === id ? updatedItem : item
)
);
});
};

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
onDelete={handleDelete}
onToggleBought={handleToggleBought}
/>
))
)}
</div>
);
}

export default ShoppingList;
