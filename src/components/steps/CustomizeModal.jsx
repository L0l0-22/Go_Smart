import React, { useState } from 'react';
import customize from "../../assets/custom.png"
export default function CustomizeModal({ isOpen, onClose , onSaveMeal }) {
    const [protein, setProtein] = useState('');
    const [carb, setCarb] = useState('');
    const [vegetables, setVegetables] = useState([]);
    const [extras, setExtras] = useState([]);
    const calorieMap = {
        protein: {
        "Grilled Chicken": 165,
        "Tofu": 144,
        "Salmon": 208,
        "Lean Beef": 250,
        "Tempeh": 200,
        },
        carb: {
        "Brown Rice": 215,
        "Quinoa": 222,
        "Sweet Potato": 180,
        "Whole Wheat Pasta": 174,
        "No Carb": 0,
        },
        vegetables: {
        "Broccoli": 30,
        "Spinach": 20,
        "Zucchini": 20,
        "Bell Peppers": 25,
        "Carrots": 35,
        },
        extras: {
        "Avocado": 120,
        "Boiled Egg": 78,
        "Chia Seeds": 60,
        "Feta Cheese": 75,
        },
    };
    const toggleSelection = (list, value, setList) => {
        if (list.includes(value)) {
        setList(list.filter((item) => item !== value));
        } else {
        setList([...list, value]);
        }
    };
    const handleSubmit = (e) => {
    e.preventDefault();

    const newMeal = {
        name: `Your Customized Meal`,
        description: `${protein} With ${carb}, ${vegetables.join(", ") || "no vegetables"} and extras: ${extras.join(", ") || "none"}`,
        kcal: totalCalories,
        protein: `${calorieMap.protein[protein] || 0}g`,
        carbs: `${calorieMap.carb[carb] || 0}g`,
        fat: `${Math.floor(totalCalories * 0.25)}g`, 
        image: customize,
    };

    onSaveMeal(newMeal);
    handleClose();
    };


    const handleClose = () => {
        setProtein("");
        setCarb("");
        setVegetables([]);
        setExtras([]);
        onClose();
    };

    const totalCalories =
    (calorieMap.protein[protein] || 0) +
    (calorieMap.carb[carb] || 0) +
    vegetables.reduce((sum, v) => sum + (calorieMap.vegetables[v] || 0), 0) +
    extras.reduce((sum, x) => sum + (calorieMap.extras[x] || 0), 0);
   
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
            <h2 className="text-xl font-bold text-forest mb-6">Customize Your Favorite Meal</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block font-medium text-forest mb-1">Protein</label>
                <select
                className="w-full px-3 py-2 border rounded-md"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                required
                >
                <option value="">Select a protein</option>
                <option>Grilled Chicken</option>
                <option>Tofu</option>
                <option>Salmon</option>
                <option>Lean Beef</option>
                <option>Tempeh</option>
                </select>
            </div>
            <div>
                <label className="block font-medium text-forest mb-1">Carbs</label>
                <select
                className="w-full px-3 py-2 border rounded-md"
                value={carb}
                onChange={(e) => setCarb(e.target.value)}
                required
                >
                <option value="">Select a carb</option>
                <option>Brown Rice</option>
                <option>Quinoa</option>
                <option>Sweet Potato</option>
                <option>Whole Wheat Pasta</option>
                <option>No Carb</option>
                </select>
            </div>
            <div>
                <label className="block font-medium text-forest mb-1">Vegetables</label>
                <div className="flex flex-wrap gap-3">
                {["Broccoli", "Spinach", "Zucchini", "Bell Peppers", "Carrots"].map((veg) => (
                    <label key={veg} className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        className="accent-forest"
                        checked={vegetables.includes(veg)}
                        onChange={() => toggleSelection(vegetables, veg, setVegetables)}
                    />
                    {veg}
                    </label>
                ))}
                </div>
            </div>
            <div>
                <label className="block font-medium text-forest mb-1">Extras</label>
                <div className="flex flex-wrap gap-3">
                {["Avocado", "Boiled Egg", "Chia Seeds", "Feta Cheese"].map((extra) => (
                    <label key={extra} className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        className="accent-forest"
                        checked={extras.includes(extra)}
                        onChange={() => toggleSelection(extras, extra, setExtras)}
                    />
                    {extra}
                    </label>
                ))}
                </div>
            </div>
            <p className="text-right font-semibold text-forest">
                Total Calories: {totalCalories} kcal
                </p>

            <button
                type="submit"
                className="w-full bg-forest text-white py-2 rounded-md hover:bg-[#2f4834]  transition"
            >
                Save Meal
            </button>
            </form>
        </div>
        </div>
    );
}
