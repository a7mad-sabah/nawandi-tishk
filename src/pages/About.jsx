// pages/About.jsx
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <div> 



    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20" dir="rtl">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        دەربارەی ئێمە
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ئێمە کتێبخانەیەکی مۆدێرنین کە ئامانجمان پێشکەشکردنی باشترین کتێبەکانە بۆ
        خوێنەران و دروستکردنی کەلتووری خوێندنەوە لە کۆمەڵگادا.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold mb-3 text-blue-600 text-center">
            ئامانجمان
          </h2>
          <p className="text-gray-600 text-center">
            ئێمە هەوڵ دەدەین باشترین کتێبەکان بە شێوەیەکی ئاسان و خێرا بگەینین
            بە دەستی خوێنەران لە هەموو شوێنێکدا.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold mb-3 text-green-600 text-center">
            بینینمان
          </h2>
          <p className="text-gray-600 text-center ">
            دروستکردنی کۆمەڵگایەکی هۆشیار و پڕ لە زانیاری لە ڕێگەی خوێندنەوە و
            گەشەپێدانی بیرکردنەوەی تاکەکان.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-600 text-center">
            بەهاکانمان
          </h2>
          <p className="text-gray-600 text-center ">
            متمانە، کوالیتی بەرز، خزمەتگوزاری باش، و پشتگیری خوێنەران بە
            شێوەیەکی بەردەوام.
          </p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="mt-16 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          بۆچی ئێمە هەڵبژێریت؟
        </h2>
        <p className="text-gray-600">
          بەهۆی جۆراوجۆری کتێبەکان، نرخی گونجاو، و خزمەتگوزاری خێرا، ئێمە
          یەکێکین لە باشترین هەڵبژاردەکان بۆ هەموو کەسێک کە حەز لە خوێندنەوە
          دەکات.
        </p>
      </motion.div>
    </div>

<Footer/>
    </div>
  );
};

export default About;
