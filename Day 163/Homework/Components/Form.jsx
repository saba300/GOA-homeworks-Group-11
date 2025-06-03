import React, { useState } from 'react';

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert('All fields required');
    onAdd({ id: Date.now(), name, price });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ProductForm;
