import { useState } from "react";

export default function HealthModal({ isOpen, onClose }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("m");
  const [activity, setActivity] = useState("1.55");

  const [bmiResult, setBmiResult] = useState(null);
  const [calorieResult, setCalorieResult] = useState(null);

  const handleClose = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setGender("m");
    setActivity("1.55");
    setBmiResult(null);
    setCalorieResult(null);
    onClose();
  };

  const calculate = () => {
    const h_cm = parseFloat(height);
    const h = h_cm / 100;
    const w = parseFloat(weight);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (h > 0 && w > 0 && a > 0) {
      const bmi = (w / (h * h)).toFixed(1);
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
      setBmiResult({ bmi, category });
      const bmr =
        gender === "m"
          ? 10 * w + 6.25 * h_cm - 5 * a + 5
          : 10 * w + 6.25 * h_cm - 5 * a - 161;
      const total = Math.round(bmr * act);
      setCalorieResult(total);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-forest text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-forest mb-4">Health Calculator</h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-forest"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-forest"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-forest"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-forest"
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-forest"
          >
            <option value="1.2">Sedentary (little to no exercise)</option>
            <option value="1.375">Lightly active (1–3 days/week)</option>
            <option value="1.55">Moderately active (3–5 days/week)</option>
            <option value="1.725">Very active (6–7 days/week)</option>
            <option value="1.9">Super active (twice/day workouts)</option>
          </select>

          <button
            onClick={calculate}
            className="w-full py-2 bg-forest text-white rounded-lg hover:bg-Darkgreen transition"
          >
            Calculate
          </button>

          {bmiResult && (
            <div className="mt-4 text-center flex justify-evenly items-center">
              <p className="text-lg font-semibold text-forest">BMI: {bmiResult.bmi}</p>
              <p className="text-sm text-gray-700">Category: {bmiResult.category}</p>
            </div>
          )}

          {calorieResult && (
            <div className="mt-2 text-center">
              <p className="text-lg font-semibold text-forest">
                Daily Calories: {calorieResult} kcal/day
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
