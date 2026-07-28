import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCarts, setTotalCarts] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const userRes = await axios.get("https://fakestoreapi.com/users");
      const cartRes = await axios.get("https://fakestoreapi.com/carts");

      setTotalProducts(res.data.length);
      setTotalUsers(userRes.data.length);
      setTotalCarts(cartRes.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  p-4 sm:p-6 md:p-8">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Products */}
        <div className="bg-green-500 rounded-2xl shadow-lg p-6 text-white hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-4xl font-bold mt-4">{totalProducts}</p>
        </div>

        {/* Users */}
        <div className="bg-blue-500 rounded-2xl shadow-lg p-6 text-white hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-4xl font-bold mt-4">{totalUsers}</p>
        </div>

        {/* Carts */}
        <div className="bg-purple-500 rounded-2xl shadow-lg p-6 text-white hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold">Total Carts</h2>
          <p className="text-4xl font-bold mt-4">{totalCarts}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;