import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const authorsData = [
  {
    id: 1,
    name: "نالی",
    bio: "نالی شاعیرێکی گەورەی کورد بوو کە بە شێوازی کلاسیکی شیعر دەنووسی و کاریگەرییەکی زۆری لە ئەدەبی کوردی هەبوو.",
    books: 12,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "مەحوی",
    bio: "مەحوی یەکێک بوو لە شاعیرە کلاسیکییەکان کە بە قووڵی لە بابەتی ئایینی و فەلسەفی نووسیویەتی.",
    books: 8,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "هیمن",
    bio: "هیمن شاعیرێکی نوێخواز بوو کە بابەتی نەتەوەیی و خۆشەویستیی وەطنی زۆر لە شیعرەکانی دا باس دەکرد.",
    books: 15,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "نالی",
    bio: "نالی شاعیرێکی گەورەی کورد بوو کە بە شێوازی کلاسیکی شیعر دەنووسی و کاریگەرییەکی زۆری لە ئەدەبی کوردی هەبوو.",
    books: 12,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "مەحوی",
    bio: "مەحوی یەکێک بوو لە شاعیرە کلاسیکییەکان کە بە قووڵی لە بابەتی ئایینی و فەلسەفی نووسیویەتی.",
    books: 8,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "هیمن",
    bio: "هیمن شاعیرێکی نوێخواز بوو کە بابەتی نەتەوەیی و خۆشەویستیی وەطنی زۆر لە شیعرەکانی دا باس دەکرد.",
    books: 15,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "نالی",
    bio: "نالی شاعیرێکی گەورەی کورد بوو کە بە شێوازی کلاسیکی شیعر دەنووسی و کاریگەرییەکی زۆری لە ئەدەبی کوردی هەبوو.",
    books: 12,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "مەحوی",
    bio: "مەحوی یەکێک بوو لە شاعیرە کلاسیکییەکان کە بە قووڵی لە بابەتی ئایینی و فەلسەفی نووسیویەتی.",
    books: 8,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "هیمن",
    bio: "هیمن شاعیرێکی نوێخواز بوو کە بابەتی نەتەوەیی و خۆشەویستیی وەطنی زۆر لە شیعرەکانی دا باس دەکرد.",
    books: 15,
    image: "https://via.placeholder.com/150",
  },
];

const Nusarakan = () => {
  const [search, setSearch] = useState("");

  const filteredAuthors = authorsData.filter((author) =>
    author.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md p-6 sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          نووسەران
        </h1>
      </div>

      {/* Search */}
      <div className="p-4 max-w-xl mx-auto w-full">
        <input
          type="text"
          placeholder="🔍 گەڕان بۆ نووسەر..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 flex-1">
        {filteredAuthors.map((author) => (
          <motion.div
            key={author.id}
            whileHover={{ scale: 1.06 }}
            className="bg-white rounded-3xl shadow-lg p-5 text-center transition duration-300 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={author.image}
                alt={author.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-blue-100 object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold mt-4 text-gray-800">
              {author.name}
            </h2>

            {/* Books */}
            <p className="text-sm text-blue-500 mt-1 font-medium">
              {author.books} کتێب
            </p>

            {/* Bio */}
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {author.bio}
            </p>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
              بینینی زیاتر
            </button>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Nusarakan;
