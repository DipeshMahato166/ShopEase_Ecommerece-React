import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        {/* About Us */}
<section
  id="about"
  className="bg-gradient-to-b from-green-50 to-white py-20 px-8 sm:px-10 lg:px-24 font-serif max-w-7xl"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* Left Side */}
    <div>
      <span className="text-green-600 font-semibold tracking-widest uppercase">
        About ShopEase
      </span>

      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mt-4 leading-tight">
        Shopping Made <span className="text-green-600">Simple</span>,
        <br />
        Fast & Reliable
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-8">
        Welcome to <span className="font-semibold text-green-600">ShopEase</span>,
        your one-stop destination for quality products at affordable prices.
        We believe online shopping should be simple, secure, and enjoyable.
        That's why we bring together a carefully selected collection of fashion,
        electronics, jewelry, and everyday essentials—all in one place.
      </p>

      <p className="mt-4 text-gray-600 text-lg leading-8">
        Whether you're shopping for yourself or searching for the perfect gift,
        ShopEase offers a seamless shopping experience with trusted products,
        secure payments, and fast delivery.
      </p>
    <Link to="/cart">
      <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition duration-300 shadow-lg">
        Explore Products
      </button>
      </Link>
    </div>

    {/* Right Side */}
    <div className="grid grid-cols-2 gap-6">

      <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-green-600">10K+</h3>
        <p className="mt-2 text-gray-600">
          Happy Customers
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-green-600">500+</h3>
        <p className="mt-2 text-gray-600">
          Premium Products
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-green-600">100+</h3>
        <p className="mt-2 text-gray-600">
          Cities Served
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-green-600">24/7</h3>
        <p className="mt-2 text-gray-600">
          Customer Support
        </p>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default About