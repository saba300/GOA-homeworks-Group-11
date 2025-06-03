import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const Dashboard = ({ onLogout }) => {
  const [products, setProducts] = useState(() =>
    JSON.parse(localStorage.getItem('products')) || []
  );

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAdd = (product) => setProducts([...products, product]);
  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      <ProductForm onAdd={handleAdd} />
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
