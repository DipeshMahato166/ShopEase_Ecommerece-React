import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {

  return (
    <section className="relative font-serif overflow-hidden bg-gradient-to-br  from-green-50 via-white to-emerald-50 py-35">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                        Contact ShopEase
                    </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-6 leading-tight">
            We'd Love to
            <span className="text-green-600"> Hear From You</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Whether you have questions, feedback, or suggestions, we're always
            happy to connect. Reach out to us anytime and we'll respond as soon
            as possible. Your ideas help us improve and create a better shopping
            experience for everyone.
          </p>
        </div>

        {/* Contact Section */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* Email */}

              <div className="flex gap-5 bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition">

                <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaEnvelope className="text-green-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-slate-800">
                    Email Address
                  </h4>

                  <p className="text-gray-600 mt-2">
                    support@shopease.com
                  </p>

                  
                </div>

              </div>

              {/* Phone */}

              <div className="flex gap-5 bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition">

                <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaPhoneAlt className="text-green-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-slate-800">
                    Phone Number
                  </h4>

                  <p className="text-gray-600 mt-2">
                    +977-9812060473
                  </p>

                  
                </div>

              </div>

              {/* Location */}

              <div className="flex gap-5 bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition">

                <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-green-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-slate-800">
                    Office Location
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Itahari-04
                    <br />
                    Sunsari, Nepal
                    
                  </p>
                </div>

              </div>

              {/* Hours */}

              <div className="flex gap-5 bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition">

                <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaClock className="text-green-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-slate-800">
                    Working Hours
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Sunday- Friday
                  </p>

                  <p className="text-gray-500">
                    10:00 AM - 6:00 PM
                  </p>

                  

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8">

            <h3 className="text-3xl font-bold text-slate-900">
              Send Us a Message
            </h3>

            <p className="text-gray-600 mt-4 mb-8 leading-7">
              Have a question or suggestion? Fill out the form below and we'll
              get back to you as soon as possible.
            </p>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="e.g Dipesh Singh"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="dipesh@example.com"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="3"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-3 py-4 outline-none resize-none focus:border-green-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300 hover:shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 bg-green-500 rounded-3xl p-12 text-center text-white shadow-xl">

          <h3 className="text-4xl font-bold">
            Thank You for Visiting ShopEase
          </h3>

          <p className="max-w-3xl mx-auto mt-5 text-lg leading-8 text-green-100">
            ShopEase is a modern e-commerce application built with React,
            Tailwind CSS, React Router, Axios, and the Fake Store API. This
            project demonstrates responsive UI design, API integration, reusable
            components, and a seamless online shopping experience.
          </p>
            <Link to="/cart">
          <button className="mt-8 bg-white text-green-600 font-semibold px-8 py-4 rounded-xl hover:bg-green-50 transition duration-300">
            Explore Products →
          </button>
</Link>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;