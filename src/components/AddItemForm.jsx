import React, { useState } from 'react';

function AddItemForm({ onAddItemSuccess }) {
 
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

  
    if (!itemName.trim() || !itemQuantity) {
      setError('Please enter both item name and quantity.');
      return;
    }

    
    const quantityAsNumber = parseInt(itemQuantity, 10);

   
    if (isNaN(quantityAsNumber) || quantityAsNumber <= 0) {
      setError('Quantity must be a positive number.');
      return;
    }

   
    const newItem = {
      name: itemName.trim(), 
      quantity: quantityAsNumber,
      
    };

    setIsLoading(true); 
    setError(null); 

    try {
     
      const response = await fetch('/api/shopping-list/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(newItem), 
      });

      if (!response.ok) {
        
        const errorData = await response.json(); 
        throw new Error(errorData.message || 'Failed to add item to shopping list.');
      }

     
      const addedItem = await response.json(); 
      console.log('Item added successfully:', addedItem);

      
      if (onAddItemSuccess) {
        onAddItemSuccess(addedItem);
      }

      
      setItemName('');
      setItemQuantity('');
      alert('Item added to list! 🛒'); 
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
        <label htmlFor="itemQuantity">Quantity:</label>
        <input
          type="number"
          id="itemQuantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          min="1" 
          required
          disabled={isLoading} 
          placeholder="e.g., 2"
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding Item...' : 'Add to List'}
      </button>
    </form>
  );
}

export default AddItemForm;