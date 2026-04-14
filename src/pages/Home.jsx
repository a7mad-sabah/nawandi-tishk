
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { booksData } from "./Books";
import Footer from "../components/Footer";
const leadersPhotos = [
  "./src/assets/images/Taw7ed.jpg",
  "./src/assets/images/dardw.jpg",
  "./src/assets/images/matn.jpg",
  "./src/assets/images/mndal.jpg",
  "./src/assets/images/jwantren.jpg",
  "./src/assets/images/Chl.jpg",
  "./src/assets/images/Taw7ed.jpg",
];


const Home = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = { type: "user", text: chatInput };
    let aiReply = { type: "ai", text: "" };

    // AI Logic: Simple book search & suggestion
    const query = chatInput.toLowerCase();
    const foundBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(query)
    );

    if (foundBooks.length > 0) {
      aiReply.text = `AI پێشنیار دەکات: ${foundBooks
        .map((b) => `"${b.title}"`)
        .join(", ")} لەگەڵ ستایلی تۆ گونجاون.`;
    } else {
      aiReply.text =
        "لە کتێبخانەکەدا ئەو کتێبە نەدۆزرایەوە. دەتوانیت ناوی کتێبێکی تر هەوڵ بدەیت.";
    }

    setChatHistory((prev) => [...prev, userMessage, aiReply]);
    setChatInput("");
  };

  return (
    <section
      dir="rtl"
      className="bg-gradient-to-b  pt-6 min-h-screen text-right"
    >
      <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full">
        {/* Hero */}
        <h1 className="text-center text-gray-900 font-semibold text-4xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          ناوەندی تیشک
        </h1>
        <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
          بزانە بۆچی زۆرێک لە خوێنەران و قوتابیان پشت بە ناوەندی ئێمە دەبەستن بۆ
          بەدەستهێنانی باشترین کتێبەکان.
        </p>
        <motion.button
          onClick={() => navigate("/books")}
          className="mt-8 bg-indigo-600 text-white px-6 pl-2.5 py-2.5 rounded-full text-sm font-medium flex flex-row-reverse items-center gap-2 hover:bg-indigo-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M19.179 11.999H5.75m0 0 6.714-6.715M5.75 12l6.714 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>بینینی کتێبەکان</span>
        </motion.button>

        {/* Leaders Photos */}
        <div className="mt-12 flex overflow-x-auto gap-6 max-w-4xl w-full pb-6">
          {leadersPhotos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`وێنە ${i + 1}`}
              onClick={() => navigate("/books")}
              whileHover={{ scale: 1.05 }}
              className="w-36 h-44 cursor-pointer hover:-translate-y-1 transition duration-300 rounded-lg object-cover flex-shrink-0 shadow-md"
            />
          ))}
        </div>

        {/* AI Chat Section */}
        <section className="mt-20 w-full bg-white py-10 rounded-2xl shadow-md px-4 sm:px-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            باسکردن و دۆزینەوەی کتێبەکان بە AI
          </h2>

          <p className="text-gray-600 text-center mb-6 leading-relaxed">
            لێرە دەتوانیت لەگەڵ AI قسە بکەیت بۆ نموونە، پرسەکانت بکەیت و AI
            پێشنیار دەکات.
          </p>

          {/* Chat Display */}
          <div className="border rounded-lg p-4 h-64 overflow-y-auto flex flex-col gap-2 bg-gray-50">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-indigo-100 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex mt-4 gap-2">
            <input
              type="text"
              placeholder="پرسیار یان ناوی کتێب بنووسە..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
              onClick={handleSendMessage}
            >
              نیشاندانی کتێب
            </motion.button>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-20 w-full py-10 rounded-2xl">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            خزمەتگوزاریەکانمان
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {["فرۆشتنی کتێب", "گەیاندنی کتێب بۆ ماڵ", "چاپکردنی کتێب"].map(
              (service, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
                >
                  <h3 className="text-lg font-medium text-indigo-600">
                    {service}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                   خزمەتگوزارییەکی باش بۆ خوێنەران
                  </p>
                </div>
              ),
            )}
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;


