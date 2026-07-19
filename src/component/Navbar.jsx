import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";
import { FaShopify, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold font-serif">
          <FaShopify className="text-black mr-2" />
          <span className="text-green-600">Shop</span>
          <span className="text-black">Ease</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-serif">

          <Link to="/">
            <li className="hover:text-green-600 transition">Home</li>
          </Link>

          <Link to="/cart">
            <li className="hover:text-green-600 transition">Products</li>
          </Link>

          <a href="#about" className="hover:text-green-600 transition">
            About Us
          </a>

          <a href="#contact" className="hover:text-green-600 transition">
            Contact Us
          </a>

        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {currentUser ? (
            <button
              onClick={logout}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <Button props={{ text: "Login",font:" text-black" }} />
              </Link>

              <Link to="/signup">
                <Button props={{ text: "Sign Up", bg: "bg-green-500", font:"text-white" }} />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <div className="flex flex-col items-center gap-5 py-6 font-serif">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Products
            </Link>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>

            {currentUser ? (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="bg-green-700 text-white px-8 py-2 rounded-full"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col justify-center items-center gap-3 w-48">
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button props={{ text: "Login", bg: "bg-green-700" }} />
                </Link>

                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <Button props={{ text: "Sign Up", bg: "bg-green-500" }} />
                </Link>
              </div>
            )}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;