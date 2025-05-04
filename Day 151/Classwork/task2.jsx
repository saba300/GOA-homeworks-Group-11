import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component re-rendered. Fetching users again...');
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  });

  return (
    <div>
      <h2>User List (Re-fetches on every render)</h2>
      <button onClick={() => setCount(count + 1)}>Re-render Component</button>
      <p>Render Count: {count}</p>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
