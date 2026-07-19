import React from "react";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import Navbar from "./Navbar";
import img from "../public/1.png";
import Contact from "./Contact";
import Statistic from "./Statistic";
import About from "./About";

const Herosec = () => {
  return (
    <>
      <Navbar />

      <section className="bg-green-400/20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 sm:px-10 lg:px-20 py-24">

        {/* Image Section */}
        <div className="border-4 border-white shadow-2xl rounded-tr-[60px] sm:rounded-tr-[100px] rounded-bl-[60px] sm:rounded-bl-[100px] bg-green-400/30">
          <img
            src={img}
            alt="Fashion"
            className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[500px] h-auto object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-xl text-center lg:text-left">

          <h1 className="uppercase font-extrabold text-slate-700 tracking-wide leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Explore Your
            <br />
            True Creative
            <br />
            Fashion
          </h1>

          <p className="mt-8 text-gray-700 text-base sm:text-lg lg:text-xl leading-8">
            Refresh your style with on-trend pieces from our clothing
            collection. Anyone can dress up and express their unique style with
            confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

            <Link to="/cart">
              <button className="bg-green-500 hover:bg-green-600 transition duration-300 text-white px-8 py-3 rounded-tr-xl rounded-bl-xl shadow-lg">
                Shop Now
              </button>
            </Link>

            <button className="flex items-center justify-center gap-3 text-slate-700 hover:text-green-600 transition duration-300">
              <FaRegCirclePlay className="text-3xl text-green-500" />
              <span className="font-semibold">Watch Demo</span>
            </button>

          </div>

          <div className="mt-12 text-center lg:text-right">

            <h2 className="text-pink-400 font-bold text-3xl sm:text-4xl lg:text-5xl">
              FASHION
            </h2>

            <h2 className="text-slate-700 font-bold text-3xl sm:text-4xl lg:text-5xl">
              SALES
            </h2>

          </div>

        </div>

      </section>
      <Statistic/>
      <About/>
      <Contact/>
    </>
  );
};

export default Herosec;