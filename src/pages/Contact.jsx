import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center px-6 py-10 font-kurdish"
        dir="rtl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8"
        >
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-8">
            پەیوەندی لەگەڵ ئێمە
          </h1>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="p-4 rounded-xl bg-gray-100">
              <FiPhone className="mx-auto text-2xl mb-2 text-indigo-500" />
              <p>07501122110</p>
              <p>07719899402</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100">
              <FiMail className="mx-auto text-2xl mb-2 text-indigo-500" />
              <p>info@bookstore.com</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100">
              <FiMapPin className="mx-auto text-2xl mb-2 text-indigo-500" />
              <p>سلێمانی، کوردستان</p>
            </div>
          </div>

          {/* Form */}
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="ناوت"
              className="p-3 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="ئیمەیڵ"
              className="p-3 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="phone"
              placeholder="ژمارەی تەلەفون"
              className="p-3 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              placeholder="نامەکەت بنووسە..."
              rows="4"
              className="p-3 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition">
              ناردن
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
