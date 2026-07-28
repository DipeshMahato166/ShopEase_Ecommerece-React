import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const API = "https://fakestoreapi.com/products/";

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${API}${id}`);
      setFormData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${API}${id}`, formData);

      if (res.status === 200) {
        alert("Product updated successfully!");
        navigate("/dashboard/product");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600">
          Loading Product...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4  md:p-8">

      <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-xl">

        {/* Header */}

        <div className="flex flex-col gap-4 border-b p-6 pt-20 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Update Product
            </h1>

            <p className="mt-1 text-gray-500">
              Edit product information
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            <FaArrowLeft />
            Back
          </button>

        </div>

        <form
          onSubmit={handleEdit}
          className="grid gap-10 p-6 lg:grid-cols-2"
        >

          {/* Left */}

          <div className="flex flex-col items-center">

            <img
              src={formData.image}
              alt={formData.title}
              className="h-72 w-72 rounded-xl border bg-white object-contain p-5 shadow"
            />

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="mt-6 w-full rounded-lg border p-3 outline-none focus:border-green-500"
            />

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Product Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Description
              </label>

              <textarea
                rows="6"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border p-3 outline-none focus:border-green-500"
              />
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate("/dashboard/product")}
                className="flex-1 rounded-lg border py-3 font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <FaSave />
                Update Product
              </button>

            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Update;