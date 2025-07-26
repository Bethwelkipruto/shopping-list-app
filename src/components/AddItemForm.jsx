import React, { useState } from 'react';

function AddItemForm({ onAddItemSuccess }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [imageFile, setImageFile] = useState(null); // ✅ new state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!itemName.trim() || !itemPrice) {
      setError('Please enter both item name and price.');
      return;
    }

    const priceAsNumber = parseInt(itemPrice, 10);
    if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
      setError('Price must be a positive number.');
      return;
    }

    setIsLoading(true);
    setError(null);

    let base64Image = "";
    if (imageFile) {
      try {
        base64Image = await convertToBase64(imageFile); // ✅ Convert image to base64
      } catch (err) {
        console.error('Image conversion failed', err);
        setError("Failed to read image file.");
        setIsLoading(false);
        return;
      }
    }

    const newItem = {
      name: itemName.trim(),
      price: priceAsNumber,
      bought: false,
      image: base64Image // ✅ attach the base64 image
    };

    try {
      const response = await fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to add item.');
      }

      const addedItem = await response.json();
      if (onAddItemSuccess) {
        onAddItemSuccess(addedItem);
      }

      setItemName('');
      setItemPrice('');
      setImageFile(null); // ✅ reset image file
    } catch (apiError) {
      console.error('Error adding item:', apiError);
      setError(apiError.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <h2>Add New Item to Shopping List</h2>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

      <div className="form-group">
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          disabled={isLoading}
          placeholder="e.g., Milk"
        />
      </div>

      <div className="form-group">
        <label htmlFor="itemPrice">Price:</label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          min="1"
          required
          disabled={isLoading}
          placeholder="e.g., 500"
        />
      </div>

      {}
      <div className="form-group">
        <label htmlFor="itemImage">Image (optional):</label>
        <input
          type="file"
          id="itemImage"
          accept="image/*"
          onChange={handleImageChange}
          disabled={isLoading}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding Item...' : 'Add to List'}
      </button>
    </form>
  );
}

export default AddItemForm;
