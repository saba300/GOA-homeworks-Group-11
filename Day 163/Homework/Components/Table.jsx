import React from 'react';

const ProductTable = ({ products, onDelete }) => {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th><th>Price</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td><button onClick={() => onDelete(p.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
