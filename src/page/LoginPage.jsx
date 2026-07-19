import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(loginData);

    setLoginData({
      username: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-green-400/20 flex items-center justify-center px-4 sm:px-6 font-serif">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-700 mb-8">
          Login
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Enter Username..."
            value={loginData.username}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            value={loginData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </div>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </form>

    </div>
  );
};

export default LoginPage;