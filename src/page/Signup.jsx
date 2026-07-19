import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    });
  };

  return (
    <div className="min-h-screen bg-green-400/20 flex items-center justify-center px-4 sm:px-6 py-10 font-serif">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-700 mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Enter First Name"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Enter Last Name"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Enter Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;