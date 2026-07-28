import React from "react";
import { Link } from "react-router-dom";
import {
    FaShoppingBag,
    FaTruck,
    FaShieldAlt,
    FaMobileAlt,
    FaStar,
    FaTags,
} from "react-icons/fa";

const AboutPage = () => {
    const features = [
        {
            icon: <FaShoppingBag className="text-3xl text-green-600" />,
            title: "Premium Products",
            description:
                "Browse a curated collection of fashion, electronics, jewelry, and everyday essentials with detailed product information.",
        },
        {
            icon: <FaTruck className="text-3xl text-green-600" />,
            title: "Fast Experience",
            description:
                "Optimized with React for lightning-fast navigation and a smooth shopping experience across every page.",
        },
        {
            icon: <FaShieldAlt className="text-3xl text-green-600" />,
            title: "Secure Shopping",
            description:
                "Designed with modern development practices to provide an intuitive and reliable shopping workflow.",
        },
        {
            icon: <FaMobileAlt className="text-3xl text-green-600" />,
            title: "Responsive Design",
            description:
                "Enjoy a consistent shopping experience on desktop, tablet, and mobile devices.",
        },
        {
            icon: <FaStar className="text-3xl text-green-600" />,
            title: "Modern UI",
            description:
                "A clean, elegant interface inspired by today's leading e-commerce platforms for effortless browsing.",
        },
        {
            icon: <FaTags className="text-3xl text-green-600" />,
            title: "Dynamic Categories",
            description:
                "Explore products across multiple categories with real-time API-powered content and detailed product pages.",
        },
    ];

    return (
        <section className="relative font-serif overflow-hidden bg-gradient-to-br  from-green-50 via-white to-emerald-50 py-35">
            {/* Decorative Background */}
            <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                        About ShopEase
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                        Experience Smarter,
                        <span className="text-green-600"> Faster & Better </span>
                        Online Shopping
                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-600">
                        ShopEase is a modern React-based e-commerce application powered by
                        the Fake Store API. It demonstrates how a real online shopping
                        platform works using dynamic product data, responsive design, and a
                        seamless user experience built with today's frontend technologies.
                    </p>
                </div>

                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left */}
                    <div>

                        <h3 className="text-3xl font-bold text-slate-900 mb-6">
                            Built for a Modern Shopping Experience
                        </h3>

                        <p className="text-gray-600 leading-8 text-lg mb-6">
                            ShopEase combines clean design, intuitive navigation, and
                            high-performance frontend technologies to deliver a shopping
                            experience that feels simple, engaging, and responsive.
                            Users can browse products, explore categories, view detailed
                            product information, and manage their shopping cart with ease.
                        </p>

                        <p className="text-gray-600 leading-8 text-lg mb-6">
                            This project showcases modern web development using React,
                            Tailwind CSS, React Router, Axios, and REST APIs. Every page has
                            been carefully designed to demonstrate reusable components,
                            scalable architecture, and responsive layouts that work perfectly
                            across all screen sizes.
                        </p>

                        <p className="text-gray-600 leading-8 text-lg">
                            Whether you're exploring products or reviewing this project as a
                            portfolio piece, ShopEase reflects the structure, design
                            principles, and user experience found in modern e-commerce
                            applications.
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-3 mt-8">
                            {[
                                "React",
                                "Tailwind CSS",
                                "REST API",
                                "Axios",
                                "Responsive UI",
                                "React Router",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <Link to="/cart">
                            <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                Explore Products →
                            </button>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-7 shadow-lg border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="mb-5">{feature.icon}</div>

                                <h4 className="text-xl font-bold text-slate-800 mb-3">
                                    {feature.title}
                                </h4>

                                <p className="text-gray-600 leading-7">
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="mt-24 bg-green-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">

                    <h3 className="text-3xl md:text-4xl font-bold">
                        Start Your Shopping Journey Today
                    </h3>

                    <p className="mt-5 max-w-3xl mx-auto text-green-100 text-lg leading-8">
                        Explore a modern shopping interface built with React and powered by
                        dynamic REST APIs. Browse products, discover categories, and enjoy a
                        clean, responsive user experience designed with modern frontend
                        technologies.
                    </p>

                    <Link to="/cart">
                        <button className="mt-8 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition">
                            Shop Now
                        </button>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default AboutPage;