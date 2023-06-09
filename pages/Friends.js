import { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
