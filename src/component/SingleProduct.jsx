import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return (
      <>
        
        <div className="min-h-screen flex justify-center items-center bg-green-400/20">
          <h1 className="text-3xl font-bold font-serif text-slate-600">
            Loading...
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      

      <div className="bg-green-400/20 min-h-screen pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">

              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full w-fit text-sm font-medium mb-4">
                {data.category}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700">
                {data.title}
              </h1>

              <p className="mt-6 text-gray-600 leading-8 text-base">
                {data.description}
              </p>

              <div className="mt-8">
                <span className="text-3xl sm:text-4xl font-bold text-green-600">
                  ${data.price}
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white px-8 py-3 rounded-lg shadow-lg">
                  Buy Now
                </button>

                <Link to="/cart">
                  <button className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-8 py-3 rounded-lg">
                    Back to Products
                  </button>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default SingleProduct;