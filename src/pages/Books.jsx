import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import Taw7ed from "../assets/images/Taw7ed.jpg";
import dardw from "../assets/images/dardw.jpg";
import mndal from "../assets/images/mndal.jpg";
import matn from "../assets/images/matn.jpg";
import Chl from "../assets/images/Chl.jpg";
import jwantren from "../assets/images/jwantren.jpg";
import wta from "../assets/images/wta.jpg";
import swnna from "../assets/images/swnna.jpg";

import Footer from "../components/Footer";
// import { div } from "framer-motion/client";


export const booksData = [
  {
    id: 1,
    title: "کتاب تەوحید",
    author: "جیمز کلیر",
    category: "پەرەسەندنی خۆ",
    price: 15000,
    description: "ڕێنماییەک بۆ دروستکردنی عادتە باش و لابردنی عادتە.",
    image: Taw7ed,
  },
  {
    id: 2,
    title: "دەردو و دەرمان",
    author: "پائولو کولۆهۆ",
    category: "فیکشن",
    price: 12000,
    description: "گەشتی گوسفەڕێک بۆ گەڕان بەخێزانێک.",
    image: dardw,
  },
  {
    id: 3,
    title: "منداڵێک لە گوندەکەوە",
    author: "رابێرت سی. مارتین",
    category: "پرۆگرامکردن",
    price: 20000,
    description: "کتێبخانەی کەرەستەی چالاکی سۆفتوێر.",
    image: mndal,
  },
  {
    id: 4,
    title: "مەتن فەتح قریب",
    author: "رابێرت کیۆساکی",
    category: "دارایی",
    price: 18000,
    description: "فێرکاریەکان لەبارەی دارایی و ڕێکخستنی پارە.",
    image: matn,
  },
  {
    id: 5,
    title: "وتەکانی ئیمامی غەزالی",
    author: "جیمز کلیر",
    category: "پەرەسەندنی خۆ",
    price: 15000,
    description: "ڕێنماییەک بۆ دروستکردنی عادتە باش و لابردنی عادتە.",
    image: wta,
  },
  {
    id: 6,
    title: "چلینەی خانمان",
    author: "پائولو کولۆهۆ",
    category: "فیکشن",
    price: 12000,
    description: "گەشتی گوسفەڕێک بۆ گەڕان بەخێزانێک.",
    image: Chl,
  },
  {
    id: 7,
    title: "جوانترین ناوەکان",
    author: "رابێرت سی. مارتین",
    category: "پرۆگرامکردن",
    price: 20000,
    description: "کتێبخانەی کەرەستەی چالاکی سۆفتوێر.",
    image: jwantren,
  },
  {
    id: 8,
    title: "سوننەتە فەرامۆشکراوەکان",
    author: "رابێرت کیۆساکی",
    category: "دارایی",
    price: 18000,
    description: "فێرکاریەکان لەبارەی دارایی و ڕێکخستنی پارە.",
    image: swnna,
  },

  {
    id: 9,
    title: "مەتن فەتح قریب",
    author: "رابێرت کیۆساکی",
    category: "دارایی",
    price: 18000,
    description: "فێرکاریەکان لەبارەی دارایی و ڕێکخستنی پارە.",
    image: matn,
  },
  {
    id: 10,
    title: "کتاب تەوحید",
    author: "جیمز کلیر",
    category: "پەرەسەندنی خۆ",
    price: 15000,
    description: "ڕێنماییەک بۆ دروستکردنی عادتە باش و لابردنی عادتە.",
    image: Taw7ed,
  },
  {
    id: 11,
    title: "دەردو و دەرمان",
    author: "پائولو کولۆهۆ",
    category: "فیکشن",
    price: 12000,
    description: "گەشتی گوسفەڕێک بۆ گەڕان بەخێزانێک.",
    image: dardw,
  },
  {
    id: 12,
    title: "منداڵێک لە گوندەکەوە",
    author: "رابێرت سی. مارتین",
    category: "پرۆگرامکردن",
    price: 20000,
    description: "کتێبخانەی کەرەستەی چالاکی سۆفتوێر.",
    image: mndal,
  },
];

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

const Books = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);

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

  const filteredBooks = booksData.filter((book) => {
    return (
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "All" || book.category === filter)
    );
  });

  const addToCart = (book) => setCart([...cart, book]);

  return (
    <div>
      <div className="p-4 md:p-6 max-w-7xl mx-auto" dir="rtl">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-center text-gray-800">
          کتێبی دڵخوازی خۆت داوا بکە
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 justify-between">
          <input
            type="text"
            placeholder="🔍 گەڕان بۆ کتێب یان نووسەر..."
            className="p-2 md:p-3 border border-gray-300 rounded-xl w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="p-2 md:p-3 border border-gray-300 rounded-xl w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">هەموو بابەتەکان</option>
            <option value="پەرەسەندنی خۆ">زانستی</option>
            <option value="فیکشن">ئاینی</option>
            <option value="پرۆگرامکردن">منداڵان</option>
            <option value="دارایی">وتاربێژی</option>
            <option value="دارایی">دارایی</option>
          </select>
        </div>

        {/* Books */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          {filteredBooks.map((book) => (
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
              {/* ❤️ Like (FIXED) */}
              <button
                onClick={() => toggleLike(book.id)}
                className={`absolute top-2 right-2 z-20 p-2 rounded-full transition
              ${liked[book.id] ? "bg-red-500 text-white" : "bg-white text-gray-600"}
              hover:scale-85`}
              >
                <GoHeart />
              </button>

              {/* Image */}
              <div className="h-48 md:h-60 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
                />
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

                {/* Buttons */}
                <div className="mt-auto pt-2 flex gap-2">
                  <button
                    onClick={() => addToCart(book)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg text-xs flex items-center justify-center gap-1 transition"
                  >
                    <FiShoppingCart /> زیادکردن
                  </button>

                  <Link
                    to={`/book/${book.id}`}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 rounded-lg text-xs flex items-center justify-center gap-1 transition"
                  >
                    <FiEye /> بینین
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredBooks.length === 0 && (
          <p className="text-center mt-10 text-gray-500 text-sm">
            هیچ کتێبێک نەدۆزرایەوە
          </p>
        )}
      </div>
      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default Books;
