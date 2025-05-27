import { useState } from 'react';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import breakfast from "../../assets/meal1.png";
import lunch from "../../assets/meal2.png";
import dinner from "../../assets/meal3.png";
import salad from "../../assets/meal4.png";
import pasta from "../../assets/meal5.png";
import fruit from "../../assets/meal6.png";
import CustomizeModal from './CustomizeModal';

export default function FixedMeals() {
  const initialMenu = [
    {
      id: 1,
      name: 'Grilled Chicken & Veggies',
      description: 'Lean grilled chicken breast served with steamed broccoli and carrots.',
      kcal: 420,
      carbs: '28g',
      protein: '40g',
      fat: '14g',
      image: breakfast,
    },
    {
      id: 2,
      name: 'Quinoa Power Bowl',
      description: 'Quinoa with roasted sweet potatoes, black beans, and avocado.',
      kcal: 450,
      carbs: '48g',
      protein: '18g',
      fat: '16g',
      image: lunch,
    },
    {
      id: 3,
      name: 'Salmon & Greens',
      description: 'Grilled salmon filet with a side of sautéed spinach and olive oil.',
      kcal: 520,
      carbs: '10g',
      protein: '38g',
      fat: '34g',
      image: salad,
    },
    {
      id: 4,
      name: 'Tofu Stir-Fry',
      description: 'Stir-fried tofu with bell peppers, bok choy, and brown rice.',
      kcal: 470,
      carbs: '42g',
      protein: '25g',
      fat: '20g',
      image: dinner,
    },
    {
      id: 5,
      name: 'Overnight Oats & Berries',
      description: 'Chilled oats soaked in almond milk with chia seeds and mixed berries.',
      kcal: 350,
      carbs: '44g',
      protein: '12g',
      fat: '12g',
      image: pasta,
    },
    {
      id: 6,
      name: 'Fruit & Nut Bowl',
      description: 'Banana, apple, almonds, and walnuts with a drizzle of honey.',
      kcal: 300,
      carbs: '40g',
      protein: '6g',
      fat: '12g',
      image: fruit,
    },
  ];
  const [addedItems, setAddedItems] = useState([]);
  const [activeInfo, setActiveInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customMeals, setCustomMeals] = useState([]);
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
        <div className='flex flex-col md:flex-row mb-10 md:mb-0 justify-between items center px-6'>
            <div className='w-full md:w-1/2'>
            <h1 className="text-4xl font-bold text-forest mb-2">Build Your Menu</h1>
            <p className="text-sm text-gray-600 mb-10 ">
                We'll create an order using your choices below. Don’t worry, you can edit this later.
            </p>
            </div>
        <button
            onClick={()=> setIsModalOpen(true)}
            className='bg-beige text-forest font-semibold h-12 px-6 rounded-md hover:bg-[#d8cfbf]'>
            Customize Your Meal
        </button>
          <CustomizeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSaveMeal={(meal) => {
              setCustomMeals((prev) => [...prev, { id: Date.now(), ...meal }]);
              setIsModalOpen(false);
            }}
          />

        </div>
      <div className="flex flex-wrap justify-center gap-8">
        {[...initialMenu, ...customMeals].map((item) => {
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
    </div>
  );
}
