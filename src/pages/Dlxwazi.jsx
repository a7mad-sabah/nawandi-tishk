import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import { booksData } from "./Books";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DlXwazi = () => {
  const [favorites, setFavorites] = useState(booksData);
  const [liked, setLiked] = useState({});

  useEffect(() => {
    const savedLikes = {};
    booksData.forEach((book) => {
      savedLikes[book.id] = localStorage.getItem(`liked-${book.id}`) === "true";
    });
    setLiked(savedLikes);
  }, []);

  useEffect(() => {
    Object.keys(liked).forEach((id) => {
      localStorage.setItem(`liked-${id}`, liked[id]);
    });
  }, [liked]);

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((b) => b.id !== id));
  };

  return (
    <div>
      <div className="p-4 md:p-6 max-w-full mx-auto" dir="rtl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-800">
          کتێبە دڵخوازەکانم
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 mt-16 text-lg">
            هیچ کتێبێکی دڵخوازت نییە
          </p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {favorites.map((book) => (
              <motion.div
                key={book.id}
                variants={cardVariants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Price */}
                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                  {book.price.toLocaleString("ku-IQ", {
                    style: "currency",
                    currency: "IQD",
                  })}
                </div>

                {/* Like */}
                <button
                  onClick={() => toggleLike(book.id)}
                  className={`absolute top-2 right-2 z-20 p-2 rounded-full transition
                    ${liked[book.id] ? "bg-red-500 text-white" : "bg-white text-gray-600"}
                    hover:scale-85`}
                >
                  <GoHeart />
                </button>

                {/* Image */}
                <div className="h-48 md:h-60 overflow-hidden relative group">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-t-2xl"
                  >
                    <Link
                      to={`/book/${book.id}`}
                      className="bg-white px-4 py-2 rounded-full text-sm flex items-center gap-1"
                    >
                      <FiEye /> زیاتر ببینە
                    </Link>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col flex-1">
                  <h2 className="text-sm md:text-base font-bold mb-1 text-gray-800 line-clamp-2">
                    {book.title}
                  </h2>
                  <p className="text-[11px] text-gray-500 mb-1">
                    نووسەر: {book.author}
                  </p>
                  <p className="text-[11px] text-blue-500 mb-1">
                    بەش: {book.category}
                  </p>
                  <p className="text-[11px] text-gray-600 line-clamp-2">
                    {book.description}
                  </p>

                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DlXwazi;
