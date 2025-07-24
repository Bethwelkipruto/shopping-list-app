import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShoppingList from "./components/ShoppingList";
import AddItemForm from "./components/AddItemForm";
import About from "./components/About";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleAddItem = (newItem) => setItems([...items, newItem]);
  const handleDeleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  const toggleBought = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setItems(updatedItems);
    const itemToUpdate = items.find((item) => item.id === id);
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bought: !itemToUpdate.bought })
    });
  };
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app light"}>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
         <Route
  path="/"
  element={
    <div>
      <AddItemForm onAddItemSuccess={handleAddItem} />
      <ShoppingList
        items={items}
        deleteItem={handleDeleteItem}
        toggleBought={toggleBought}
      />
    </div>
  }
/>

        <Route path="/add" element={<AddItemForm onaddItemSuccess={handleAddItem} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

