import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold font-serif text-slate-600">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-red-500">{error}</h1>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 pt-50 bg-green-400/20 min-h-screen ">
      {data.map((item) => (
        <Link key={item.id} to={`/cart/${item.id}`}>
          <div className="max-w-sm bg-green-400/30 rounded-xl shadow-2xl p-4 hover:scale-105 transition duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-contain"
            />

            <div className="mt-4">
              <h2 className="text-lg font-semibold">
                {item.title.slice(0, 30)}...
              </h2>

              <p className="inline-block mt-2 px-3 py-1 bg-gray-200 rounded-full text-sm">
                {item.category}
              </p>

              <p className="text-gray-600 mt-3 text-sm">
                {item.description.slice(0, 90)}...
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-green-600">
                  ${item.price}
                </span>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Added to cart:', item);
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Cart;