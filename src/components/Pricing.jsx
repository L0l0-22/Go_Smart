import { FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Pricing() {
  return (
    <div className=" bg-forest pt-4 pb-20">
      <div className="relative z-10 w-[90%] lg:max-w-6xl mx-auto -mb-3 md:mb-0">
        <h2 className="text-4xl font-bold text-center mb-10 text-brightBeige">Choose Your Plan</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Weight Loss Plan */}
        <div className="bg-beige p-8 rounded-2xl shadow-lg text-center w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Weight Loss Plan</h3>
            <p className="text-gray-600 mb-6">For those aiming to burn fat and slim down</p>
            <div className="text-4xl font-bold text-forest mb-6">
            $49<span className="text-base font-medium">/mo</span>
            </div>

            <ul className="space-y-3 mb-6 text-left text-gray-700">
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> 10 calorie-controlled meals/week</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Low-carb & nutrient-dense</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Designed for fat loss phases</li>
            </ul>

            <NavLink
            to="/plan"
            className="bg-forest text-beige px-6 py-2 rounded-full hover:bg-Darkgreen transition">Choose Plan
            </NavLink>
        </div>

        {/* Maintenance Plan - Moved to center */}
        <div className="bg-peach border-2 border-peach p-8 rounded-2xl shadow-xl text-center w-full md:w-1/3 scale-105">
            <h3 className="text-xl font-semibold mb-2 text-forest">Maintenance Plan</h3>
            <p className="text-gray-600 mb-6">Ideal for staying on track year-round</p>
            <div className="text-4xl font-bold text-forest mb-6">
            $129<span className="text-base font-medium">/mo</span>
            </div>

            <ul className="space-y-3 mb-6 text-left text-gray-700">
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> 30+ balanced meals/week</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Macronutrient optimized meals</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Daily variety for consistency</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Access to premium support</li>
            </ul>

            <NavLink
            to="/plan"
             className="bg-forest text-beige px-6 py-2 rounded-full hover:bg-Darkgreen transition">Choose Plan</NavLink>
        </div>

        {/* Muscle Gain Plan */}
        <div className="bg-beige p-8 rounded-2xl shadow-lg text-center w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Muscle Gain Plan</h3>
            <p className="text-green-950 mb-6">For building lean mass and strength</p>
            <div className="text-4xl font-bold text-forest mb-6">
            $89<span className="text-base font-medium">/mo</span>
            </div>

            <ul className="space-y-3 mb-6 text-left text-green-950">
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> 20 high-protein meals/week</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Custom macros for bulking</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> Includes pre/post workout meals</li>
            <li className="flex items-center"><FiCheckCircle className="text-green-600 mr-2" /> MyFitnessPal integration</li>
            </ul>

            <NavLink
            to="/plan"
             className="bg-forest text-beige px-6 py-2 rounded-full hover:bg-Darkgreen transition">Choose Plan</NavLink>
        </div>
        </div>

      </div>
    </div>
  );
}
