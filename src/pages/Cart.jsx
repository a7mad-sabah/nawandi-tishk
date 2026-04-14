// pages/Cart.jsx
import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "کتێبی بیرکاری",
      price: 20000,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      title: "کتێبی زانست",
      price: 15000,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [city, setCity] = useState("slemani");
  const [discount] = useState(0);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = city === "slemani" ? 3000 : 5000;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6" dir="rtl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        🛒 سەبەتەی کڕین
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Items */}
        <div className="md:col-span-2 space-y-3 md:space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center">سەبەتەکەت بەتاڵە 😢</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 md:p-4 rounded-xl shadow flex flex-col md:flex-row gap-3 md:items-center md:justify-between"
              >
                {/* Top (mobile) */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm md:text-base">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {item.price.toLocaleString()} دینار
                    </p>
                  </div>
                </div>

                {/* Bottom (mobile) */}
                <div className="flex items-center justify-between md:justify-end gap-3">
                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Address */}
          <div className="bg-white p-4 rounded-xl shadow space-y-3">
            <h2 className="font-bold text-sm md:text-base">📍 ناونیشان</h2>

            <input
              type="text"
              placeholder="ناونیشانەکەت..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded text-sm"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="slemani">سلێمانی</option>
              <option value="other">دەرەوەی سلێمانی</option>
            </select>
          </div>

          {/* Notes */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-sm md:text-base">📝 تێبینی</h2>
            <textarea
              placeholder="تێبینی..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border rounded h-20 md:h-24 text-sm"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow space-y-3 md:space-y-4 h-fit">
          <h2 className="text-lg md:text-xl font-bold">کۆی داواکاری</h2>

          <div className="flex justify-between text-sm">
            <span>کۆی کتێبەکان</span>
            <span>{subtotal.toLocaleString()} دینار</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>گواستنەوە</span>
            <span>{shipping.toLocaleString()} دینار</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>داشکاندن</span>
            <span>{discount.toLocaleString()} دینار</span>
          </div>

          <hr />

          <div className="flex justify-between font-bold text-base md:text-lg">
            <span>کۆی گشتی</span>
            <span>{total.toLocaleString()} دینار</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-xl hover:bg-blue-700 transition text-sm md:text-base">
            بەردەوامبوون بۆ پارەدان 💳
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
