import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 px-6"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1. Logo + About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3"> تیشک</h2>
          <p className="text-sm leading-6">
            ناوەندی تیشک بۆ خوێندنەوە و دۆزینەوەی باشترین
            <br></br>
            کتێبەکان و نووسەرەکان.
          </p>
          
          <br/>
          <h2 className="text-xl font-bold text-white mb-3"> ناونیشان</h2>
          <p className="text-sm leading-6">
          سلێمانی - بازاڕی ئاوباریک - بەرامبەر کاسۆمۆڵ دوکانی ژمارە ٧٠
          </p>
        </div>

        {/* 2. Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">لینکەکان</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                سەرەکی
              </Link>
            </li>
            <li>
              <Link to="/Books" className="hover:text-white">
                کتێبەکان
              </Link>
            </li>
            <li>
              <Link to="/Nusarakan" className="hover:text-white">
                نووسەرەکان
              </Link>
            </li>
            <li>
              <Link to="/dlxwazi" className="hover:text-white">
                دڵخوازەکان
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Help */}
        <div>
          <h3 className="text-white font-semibold mb-3">یارمەتی</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/About" className="hover:text-white">
                دەربارەی ئێمە
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-white">
                پەیوەندی
              </Link>
            </li>
            <li>
              <Link to="/Privacy" className="hover:text-white">
                پاراستنی زانیاری
              </Link>
            </li>
            <li>
              <Link to="/Terms" className="hover:text-white">
                مەرجەکان
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Newsletter + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">بەشداربە</h3>
          <p className="text-sm mb-3">ئیمەیڵەکەت بنێرە بۆ وەرگرتنی نوێکاری</p>

          <div className="flex mb-4">
            <input
              type="email"
              placeholder="ئیمەیڵ..."
              className="w-full px-3 py-2 rounded-l-md text-white outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700 text-white">
              ناردن
            </button>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} تیشک | هەموو مافەکان پارێزراون
      </div>
    </footer>
  );
};

export default Footer;
