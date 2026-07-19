import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineCopyright,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-gray-300 font-serif pt-14"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="flex items-center text-3xl font-bold text-white mb-5">
              <FaShopify className="text-green-500 mr-2" />
              Shop<span className="text-green-500">Ease</span>
            </h2>

            <p className="leading-7 text-gray-400">
              ShopEase is your trusted online shopping destination,
              offering quality products at affordable prices.
              We aim to provide a secure, fast, and enjoyable
              shopping experience for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-green-400 transition">
                  Products
                </Link>
              </li>

              <li>
                <a href="#about" className="hover:text-green-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-green-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3">
              <li>FAQs</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <MdEmail className="text-green-400 text-xl" />
                <span>support@shopease.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-green-400 text-xl" />
                <span>+977 9812060473</span>
              </div>

              <div className="flex items-center gap-3">
                <MdLocationOn className="text-green-400 text-xl" />
                <span>Itahari, Nepal</span>
              </div>

            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-8 text-3xl">

              <AiFillFacebook className="hover:text-green-400 cursor-pointer transition" />

              <AiFillInstagram className="hover:text-green-400 cursor-pointer transition" />

              <AiFillTwitterCircle className="hover:text-green-400 cursor-pointer transition" />

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="flex items-center gap-2 text-sm text-center">
            <AiOutlineCopyright />
            2026 ShopEase. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400">
            Designed by dipesh with ❤️ for a better shopping experience.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Contact;