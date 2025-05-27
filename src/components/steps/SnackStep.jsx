import { useState } from 'react';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowBack, IoMdArrowForward, IoMdInformationCircleOutline } from 'react-icons/io';
import snack1 from "../../assets/snack5.png";
import snack2 from "../../assets/snack2.png";
import snack3 from "../../assets/snack3.png";
import snack4 from "../../assets/snack4.png";
import snack5 from "../../assets/snack1.png";
import fruit from "../../assets/meal6.png";

export default function SnackStep({ onBack, onNext }) {
 const initialMenu = [
  {
    id: 1,
    name: 'Greek Yogurt & Berries',
    description: 'Creamy Greek yogurt with fresh strawberries, blueberries, and honey.',
    kcal: 180,
    carbs: '18g',
    protein: '12g',
    fat: '5g',
    image: fruit,
  },
  {
    id: 2,
    name: 'Trail Mix Cup',
    description: 'A mix of almonds, walnuts, raisins, dried cranberries, and dark chocolate chips.',
    kcal: 220,
    carbs: '22g',
    protein: '6g',
    fat: '14g',
    image: snack2,
  },
  {
    id: 3,
    name: 'Boiled Egg & Veggies',
    description: 'A boiled egg with sliced cucumbers, baby carrots, and cherry tomatoes.',
    kcal: 160,
    carbs: '8g',
    protein: '10g',
    fat: '10g',
    image: snack3,
  },
  {
    id: 4,
    name: 'Peanut Butter Banana ',
    description: 'Banana slices layered with natural peanut butter and topped with crushed oats.',
    kcal: 210,
    carbs: '24g',
    protein: '5g',
    fat: '10g',
    image: snack4,
  },
  {
    id: 5,
    name: 'Oats Snack Cup',
    description: 'Mini cup of oats soaked in almond milk with chia seeds and diced apple.',
    kcal: 190,
    carbs: '26g',
    protein: '6g',
    fat: '6g',
    image: snack5,
  },
  {
    id: 6,
    name: 'Fruit & Nut Energy Bites',
    description: 'Bite-sized snacks made from dates, nuts, coconut, and a hint of cocoa.',
    kcal: 170,
    carbs: '20g',
    protein: '4g',
    fat: '9g',
    image: snack1,
  },
];
  const [addedItems, setAddedItems] = useState([]);
  const [activeInfo, setActiveInfo] = useState(null);
  const handleAdd = (id) => {
    if (addedItems.includes(id)) {
      setAddedItems(addedItems.filter((itemId) => itemId !== id));
    } else {
      setAddedItems([...addedItems, id]);
    }
  };
  const toggleInfo = (id) => {
    setActiveInfo((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-8">
        <div className='text-center'>
            <h1 className="text-3xl md:text-4xl font-bold text-forest mb-2">Choose Your Snacks</h1>
            <p className="text-sm text-gray-600 mb-10 ">
            Pick the snacks you’d like to include. You can always change them later.
            </p>
        </div>
      <div className="flex flex-wrap justify-center gap-8">
        {initialMenu.map((item) => {
          const showInfo = activeInfo === item.id;

          return (
            <div
              key={item.id}
              className="bg-white w-full sm:w-[45%] lg:w-[30%] rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-forest">{item.name}</h2>
                  <button
                    onClick={() => toggleInfo(item.id)}
                    className="text-forest active:scale-90 transition"
                    title="Toggle nutrition info"
                  >
                    <IoMdInformationCircleOutline size={22} />
                  </button>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {/* Info */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    showInfo ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="mt-4 text-sm text-gray-700">
                    <div className="flex justify-between text-forest font-semibold">
                        <span>kcal</span>
                        <span>Protein</span>
                        <span>Carbs</span>
                        <span>Fat</span>
                    </div>
                    <div className="flex justify-between text-gray-800 font-medium mt-1">
                        <span>{item.kcal}</span>
                        <span>{item.protein}</span>
                        <span>{item.carbs}</span>
                        <span>{item.fat}</span>
                    </div>
                    </div>
                </div>
                <div className="mt-4">
                <button
                    onClick={() => handleAdd(item.id)}
                    className={`${
                        addedItems.includes(item.id)
                        ? "bg-forest text-beige"
                        : "bg-beige text-forest"
                    } font-semibold px-3 py-2 w-full rounded-full text-md flex items-center justify-center gap-2 hover:bg-[#2f4834] hover:text-beige transition`}
                    >
                    {addedItems.includes(item.id) ? <FaCheck /> : <FaShoppingCart />}
                    {addedItems.includes(item.id) ? "Added" : "Add"}
                    </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
       <div className="mt-5 flex justify-between items-center max-w-4xl mx-auto px-4">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-32 py-3 bg-beige text-forest font-semibold rounded-md shadow-sm 
              hover:bg-[#d8cfbf] transition-colors duration-200"
            >
              <IoMdArrowBack size={20} className="mr-2" />
              Back
            </button>
            <button
              onClick={onNext}
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
