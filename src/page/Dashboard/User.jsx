import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/users');
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-serif">
        <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="p-6 font-serif">
      <h1 className="text-2xl font-bold mb-4">User Table</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Username</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">City</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{u.id}</td>
                <td className="border p-2">{u.username}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.phone}</td>
                <td className="border p-2">{u.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;