import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`سوپاس بۆ تۆمارکردن، ${username}!`);
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex items-start justify-center min-h-screen bg-gray-100 p-4 pt-10 sm:pt-20"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          ئەکاونت دروست بکە
        </h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="ناوی بەکارهێنەر"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
            required
          />
          <input
            type="email"
            placeholder="ئیمەیڵ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
            required
          />
          <input
            type="phone"
            placeholder="ژمارەی تەلەفون"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
            required
          />
          <input
            type="password"
            placeholder="وشەی نهێنی"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 sm:p-4 rounded-lg font-semibold hover:bg-green-600 transition text-base sm:text-lg w-full"
          >
            تۆمارکردن
          </button>
        </form>
        <p
          className="mt-4 text-center text-blue-500 cursor-pointer text-base sm:text-lg"
          onClick={goToLogin}
        >
          هەژمارم هەیە
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
