import React, { useState } from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

export default function CheckOutStep({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    payment: 'card',
    discount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[90%] mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Form */}
        <form className="space-y-5 w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-forest mb-6">Checkout Information</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-forest"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-forest"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-forest"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-forest"
              required
            ></textarea>
          </div>
        </form>
        {/* Right: Order Summary */}
        <div className="text-sm w-full md:w-1/3 bg-[#f9fafc] p-6 rounded-xl shadow border text-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Order summary</h3>

          <div className="flex justify-between mb-4">
            <span>5 x Balanced Fat Loss Meals</span>
            <span className="font-medium text-gray-900">£34.75</span>
          </div>

          <hr className="my-4" />

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">£34.75</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span className="text-[#e63946] font-semibold">FREE</span>
            </div>
          </div>

          <hr className="my-4" />

          {/* Payment method */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Payment method</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={formData.payment === "card"}
                  onChange={handleChange}
                  className="accent-forest"
                />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={formData.payment === "cash"}
                  onChange={handleChange}
                  className="accent-forest"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between items-center mb-2">
            <span className="text-base font-bold text-gray-900">Total</span>
            <span className="text-lg font-extrabold text-gray-900">£34.75</span>
          </div>

          <div className="text-green-700 text-sm font-medium mb-6">£6.95 per serving</div>

          <label className="block text-sm font-medium text-gray-600 mb-1">Discount code</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Enter code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-forest"
          />
        </div>
      </div>
      {/* Navigation */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-32 py-3 bg-beige text-forest font-semibold rounded-md shadow-sm 
          hover:bg-[#d8cfbf] transition-colors duration-200"
        >
          <IoMdArrowBack size={20} className="mr-2" />
          Back
        </button>
        <button
          onClick={() => onNext(formData)}
          className="flex items-center justify-center w-32 py-3 bg-forest text-white font-semibold rounded-md shadow-sm 
          hover:bg-[#2f4834] transition-colors duration-200"
        >
          Next
          <IoMdArrowForward size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
