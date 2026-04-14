import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiPhone, FiUser, FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(2);

  const navLinks = [
    { name: "سەرەکی", path: "/" },
    { name: "کتێبەکان", path: "/books" },
    { name: "نووسەرەکان", path: "/nusarakan" },

    { name: "لیستی دڵخوازەکانم", path: "/dlxwazi" },
    { name: "دەربارەی ئێمە", path: "/about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // prevent scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }
  };

  return (
    <div className="md:block md:mx-40 mx-7 mt-5 font-Navbar" dir="rtl">
      <nav className="flex items-center justify-between px-4 py-2 rounded-full text-black relative">
        {/* Logo */}
        <Link to="/" className="mr-2">
          <img
            src={logo}
            alt="logo"
            className="h-14 md:h-16 lg:h-20 max-h-20 mx-auto md:mx-0"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `relative overflow-hidden h-6 group cursor-pointer ${
                  isActive ? "text-indigo-500 font-semibold" : "text-black"
                }`
              }
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {link.name}
              </span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                {link.name}
              </span>
            </NavLink>
          ))}{" "}
        </div>

        {/* Right Section Desktop */}
        <div className="hidden md:flex items-center gap-6 ml-10">
          <Link
            to="/cart"
            className="relative text-xl hover:scale-110 transition"
          >
            <FiShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-indigo-500 hover:scale-110 transition"
          >
            <FiPhone />
          </Link>
          <Link
            to="/login"
            className="text-xl hover:text-indigo-500 hover:scale-110 transition"
          >
            <FiUser />
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black text-2xl ml-4"
        >
          <FiMenu />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-start pt-24 md:hidden"
            >
              <div className="bg-white w-11/12 max-w-xs rounded-xl shadow-xl flex flex-col items-center gap-5 py-6">
                {/* Navigation Links */}
                {navLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-lg transition ${
                        isActive
                          ? "text-indigo-500 font-semibold"
                          : "text-black"
                      } hover:text-indigo-500`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}{" "}
                {/* Icons Row */}
                <div className="flex justify-center items-center gap-6 mt-2">
                  <Link to="/cart" className="flex items-center gap-1 text-lg">
                    <FiShoppingCart /> ({cartCount})
                  </Link>
                  <Link to="/contact" className="text-lg">
                    <FiPhone />
                  </Link>
                  <Link to="/login" className="text-lg">
                    <FiUser />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
