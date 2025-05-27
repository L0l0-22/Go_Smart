import { useState } from "react";

import loseImg from "../../assets/lose-weight.png";
import maintainImg from "../../assets/maintain.png";
import gainImg from "../../assets/gain.png";
import balanced from "../../assets/balanced.png";
import low from "../../assets/low-carb.png";
import { IoMdArrowForward } from "react-icons/io";

export default function PlanStep({ onNext }) {
  const [goal, setGoal] = useState(null);
  const [style, setStyle] = useState(null);
  const [meals, setMeals] = useState(null);

  return (
    <div className="text-center mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-Darkgreen mb-4">Design your best diet</h2>
      <p className="text-xs md:text-sm text-gray-600 mb-10">
        Easily meet your goals with the perfect balance of protein,<br/>carbs and macro-nutrients.
      </p>
      <h3 className="text-2xl md:text-3xl text-forest font-semibold mb-6">What’s your goal?</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <button
          onClick={() => setGoal("lose")}
          className={`w-60 h-44 rounded-2xl p-4 text-center transition ${
            goal === "lose"
              ? "bg-beige"
              : "bg-brightBeige border border-peach hover:bg-beige"
          }`}
        >
          <img src={loseImg} alt="Lose weight" className="w-16 h-16 mx-auto mb-2" />
          <div className="font-bold text-xl text-forest">Lose Weight</div>
          <div className="text-xs mt-1">1600 - 1800 kcal/day</div>
        </button>
        <button
          onClick={() => setGoal("maintain")}
          className={`w-60 h-44 rounded-2xl p-4 text-center transition ${
            goal === "maintain"
              ? "bg-beige"
              : "bg-brightBeige border border-peach hover:bg-beige"
          }`}
        >
          <img src={maintainImg} alt="Maintain" className="w-14 h-14 mx-auto mb-2" />
          <div className="font-bold text-xl text-forest">Maintain Weight</div>
          <div className="text-xs mt-1">2000 - 2200 kcal/day</div>
        </button>
        <button
          onClick={() => setGoal("gain")}
          className={`w-60 h-44 rounded-2xl p-4 text-center transition ${
            goal === "gain"
              ? "bg-beige"
              : "bg-brightBeige border border-peach hover:bg-beige"
          }`}
        >
          <img src={gainImg} alt="Gain muscle" className="w-14 h-14 mx-auto mb-2" />
          <div className="font-bold text-xl text-forest">Gain Muscle</div>
          <div className="text-xs mt-1">2400 - 2600 kcal/day</div>
        </button>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl text-forest font-semibold mb-6">Balanced or Lower Carb?</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button
            onClick={() => setStyle("balanced")}
            className={`w-72 rounded-2xl p-4 text-left transition space-y-2 ${
              style === "balanced"
                ? "bg-beige"
                : "bg-brightBeige border border-peach hover:bg-beige"
            }`}
          >
            <img src={balanced} alt="Balanced" className="w-16 h-16 mx-auto mb-2" />
            <div className="font-bold text-xl text-forest text-center">Balanced</div>
            <ul className="text-gray-800 text-center mt-2 space-y-1 text-sm">
              <li>High protein</li>
              <li>2 portions of veg</li>
              <li>Balanced carbs</li>
            </ul>
            <div className="text-forest font-semibold mt-3 text-center">£6.95 / meal</div>
          </button>
          <button
            onClick={() => setStyle("low")}
            className={`w-72 rounded-2xl p-4 text-left transition space-y-2 ${
              style === "low"
                ? "bg-beige"
                : "bg-brightBeige border border-peach hover:bg-beige"
            }`}
          >
            <img src={low} alt="Lower Carb" className="w-14 h-14 mx-auto mb-2" />
            <div className="font-bold text-xl text-forest text-center">Lower Carb</div>
            <ul className="text-gray-800 text-center mt-2 space-y-1 text-sm">
              <li>Extra protein</li>
              <li>3+ portions of veg</li>
              <li>Lower carbs</li>
            </ul>
            <div className="text-forest font-semibold mt-3 text-center">£7.75 / meal</div>
          </button>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl text-forest font-semibold mb-6">How many meals per week?</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          {[5, 10, 15, 20, "More"].map((count) => (
            <button
              key={count}
              onClick={() => setMeals(count)}
              className={`w-48 h-28 rounded-2xl p-4 text-center transition ${
                meals === count
                  ? "bg-beige"
                  : "bg-brightBeige border border-peach hover:bg-beige"
              }`}
            >
              <div className="font-bold text-[22px] text-green-950">
                {count} Meals
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center flex items-end justify-end">
        <button
          onClick={onNext}
          className="flex items-center justify-center w-32 py-3 bg-forest text-white font-semibold rounded-md shadow-sm 
          hover:bg-[#2f4834]  transition-colors duration-200"
        >
          Next
          <IoMdArrowForward size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
