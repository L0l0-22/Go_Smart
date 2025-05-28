import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../assets/login.png";

export default function SignUp() {
       const navigate = useNavigate(); 
      const handleSubmit = (e) => {
            e.preventDefault();
            navigate("/"); 
        };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
    <div className="hidden lg:block lg:w-1/2 relative bg-beige">
      <img
          src={loginimg}
          alt="Login Visual"
          className="w-full h-screen object-cover lg:h-screen "
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:my-0 my-auto">
        <div className="max-w-md w-full">
            <h5 className="text-4xl text-center font-semibold mb-2 text-forest">
            Sign Up
            </h5>
            <h5 className="text-gray-600 mb-9 text-center">
            Nice to see you again!
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email or Phone
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email or Phone"
                className="w-full h-12 border border-gray-300 rounded px-3"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full h-12 border border-gray-300 rounded px-3"
                required
              />
            </div>

            <div className="flex justify-end text-sm mb-6">
              <Link to="/forgetpassword" className="text-forest hover:underline">
                Forget password
              </Link>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full h-12 bg-Darkgreen hover:bg-[#267048] text-white font-bold rounded"
              >
                Login
              </button>
            </div>

            <div className="text-center text-sm">
              <p>
                Don't have an account?
                <Link to="/signin" className="text-forest hover:underline ml-1">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}