const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
const ITEMS_URL = `${BASE_URL}/items`; // ✅ Corrected: BASE_URL already includes /items

// GET: Fetch all items
export async function fetchItems() {
  const res = await fetch(ITEMS_URL);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

// POST: Add a new item
export async function addItem(item) {
  console.log("post request received")
  console.log("post item ",item)
  const res = await fetch(ITEMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  });
console.log("post response:",res)
  if (!res.ok) throw new Error("Failed to add item");

  const text = await res.text();
  return text ? JSON.parse(text) : null; // ✅ Safe even if response body is empty
}

// DELETE: Remove an item
export async function deleteItem(id) {
  const res = await fetch(`${ITEMS_URL}/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to delete item");
}

// PATCH: Update item (e.g., mark as bought)
export async function updateItem(id, updates) {
  const res = await fetch(`${ITEMS_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  });

  if (!res.ok) throw new Error("Failed to update item");

  const text = await res.text();
  return text ? JSON.parse(text) : null; // ✅ Safe parsing
}
