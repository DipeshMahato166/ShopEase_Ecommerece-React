import React, { useState, useEffect } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGift, FaShopify } from "react-icons/fa6";
import { FiUsers, FiMenu, FiX } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LuLayoutDashboard />,
      path: "/dashboard/home",
    },
    {
      name: "Products",
      icon: <FaGift />,
      path: "/dashboard/product",
    },
    {
      name: "Users",
      icon: <FiUsers />,
      path: "/dashboard/user",
    },
    {
      name: "Orders",
      icon: <FaShoppingCart />,
      path: "/dashboard/order",
    },
    {
      name: "Analytics",
      icon: <SiSimpleanalytics />,
      path: "/dashboard/analytics",
    },
  ];

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-green-600 px-4 py-3 text-black shadow-md lg:hidden">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-wide"
        >
          <FaShopify className="text-2xl" />
          <span>SHOPEASE</span>
        </NavLink>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open sidebar menu"
          className="rounded-lg p-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiMenu size={26} />
        </button>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sidebar (Mobile Drawer + Desktop Fixed/Sticky Column) */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-64 flex-col bg-green-600 text-white shadow-2xl transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:w-64 lg:translate-x-0 lg:shadow-none`}
      >
        {/* Sidebar Header / Logo */}
        <div className="flex h-16 items-center justify-between border-b border-green-500/50 px-6">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-wide"
          >
            <FaShopify className="text-2xl text-green-200" />
            <span>SHOPEASE</span>
          </NavLink>

          <button
            className="rounded-lg p-1 text-green-100 hover:bg-green-700 lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Navigation Menu Links */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-white text-green-700 shadow-sm"
                    : "text-green-50 hover:bg-green-700/60 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Optional Footer/Account Info Section */}
        <div className="border-t border-green-500/50 p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-green-100">
            <div className="h-2 w-2 rounded-full bg-green-300 animate-pulse" />
            <span>Dashboard v1.0</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;