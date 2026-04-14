import { useParams, Link } from "react-router-dom";
import { booksData } from "./Books";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart, FiEye } from "react-icons/fi";

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  // ❤️ load liked from localStorage
  const [liked, setLiked] = useState(() => {
    return localStorage.getItem(`liked-${id}`) === "true";
  });

  // ❤️ save liked to localStorage
  useEffect(() => {
    localStorage.setItem(`liked-${id}`, liked);
  }, [liked, id]);

  // ❤️ load feedbacks from localStorage
  useEffect(() => {
    const savedFeedbacks =
      JSON.parse(localStorage.getItem(`feedbacks-${id}`)) || [];
    setFeedbacks(savedFeedbacks);
  }, [id]);

  const toggleLike = () => setLiked((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) return;

    const newFeedback = { id: Date.now(), name, comment, rating };
    const updatedFeedbacks = [newFeedback, ...feedbacks];
    setFeedbacks(updatedFeedbacks);

    // ❤️ save to localStorage
    localStorage.setItem(`feedbacks-${id}`, JSON.stringify(updatedFeedbacks));

    setName("");
    setComment("");
    setRating(0);
  };

  if (!book) {
    return (
      <div className="text-center mt-2 ">
        <h1 className="text-3xl font-extrabold text-red-600 mb-4">
          ❌ کتێبەکە نەدۆزرایەوە
        </h1>
        <Link to="/books" className="text-blue-600 hover:underline text-lg">
          ← گەڕانەوە
        </Link>
      </div>
    );
  }

  const StarRating = ({ ratingValue }) => (
    <div className="flex gap-1 text-yellow-400 text-lg">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>{i <= ratingValue ? "★" : "☆"}</span>
      ))}
    </div>
  );

  return (
    <div className="p-4 md:p-12 max-w-7xl mx-auto text-right ">
      {" "}
      {/* Back */}
      <div className="mb-8 flex justify-start">
        <Link
          to="/books"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
        >
          ← گەڕانەوە
        </Link>
      </div>
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Book */}
        <motion.div
          initial={{ opacity: 0, rotateY: 40, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[400px] aspect-[4/3] perspective">
            <div className="group w-full h-full bg-white rounded-2xl shadow-2xl transform rotate-y-[-15deg] hover:rotate-y-0 transition duration-500 overflow-hidden font-details">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />

              {/* Price */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 font-details">
                {book.price.toLocaleString("ku-IQ", {
                  style: "currency",
                  currency: "IQD",
                })}
              </div>
              {/* ❤️ heart */}
              <button
                onClick={toggleLike}
                className={`absolute top-2 right-2 z-20 p-2 rounded-full transition
                  ${liked ? "bg-red-500 text-white" : "bg-white text-gray-600"}
                  hover:scale-85`}
              >
                <GoHeart />
              </button>

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition"></div>
            </div>

            <div className="absolute -bottom-5 left-5 w-[90%] h-5 bg-black/25 blur-xl rounded-full"></div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center mb-3 border-b pb-2 border-gray-200">
            دەربارەی کتێب
          </h2>

          <h1 className="text-3xl font-extrabold">{book.title}</h1>

          <p className="text-gray-600">
            نووسەر: <span className="font-semibold">{book.author}</span>
          </p>

          <p className="text-blue-600">بەش: {book.category}</p>

          <p>
            <span className="font-semibold">نرخ:</span>{" "}
            {book.price || "نەدۆزرایەوە"}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-700">
            <p>
              <span className="font-semibold">قەبارە:</span>{" "}
              {book.size || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">جۆری لاپەڕە:</span>{" "}
              {book.pageType || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">ژ. لاپەڕە:</span>{" "}
              {book.pageNumber || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">جۆری بەرگ:</span>{" "}
              {book.paperType || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">چاپخانە:</span>{" "}
              {book.publisher || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">وەڕگێڕ:</span>{" "}
              {book.translator || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">دیزاینەر:</span>{" "}
              {book.designer || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">ناوەندی بڵاوکردنەوە:</span>{" "}
              {book.publicationPlace || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">چاپی:</span>{" "}
              {book.chapi || "نەدۆزرایەوە"}
            </p>
            <p>
              <span className="font-semibold">ساڵی چاپ:</span>{" "}
              {book.salichap || "نەدۆزرایەوە"}
            </p>
          </div>
          <p>
            <span className="font-semibold">پوختەی کتێب:</span>{" "}
            {book.description}
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl shadow-md transition">
            🛒 زیادکردن بۆ سەبەتە
          </button>
        </motion.div>
      </div>
      {/* Feedback */}
      <div className="mt-16" dir="rtl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          فیدباکی خوێنەران
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md mb-8"
        >
          <input
            type="text"
            placeholder="ناوت بنووسە..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 p-3 border rounded-xl"
          />
          <textarea
            placeholder="ڕای خۆت بنووسە..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full mb-3 p-3 border rounded-xl"
          />
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                onClick={() => setRating(i)}
                className={`text-2xl cursor-pointer ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl w-full">
            ناردنی فیدباک
          </button>
        </form>

        <div className="space-y-4">
          {feedbacks.length === 0 ? (
            <p className="text-gray-500 text-center">هێشتا هیچ فیدباکێک نییە</p>
          ) : (
            feedbacks.map((f) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-100 p-4 rounded-2xl"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-blue-600">{f.name}</h4>
                  <StarRating ratingValue={f.rating} />
                </div>
                <p>{f.comment}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
