import { TbChecklist } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";
import { GiCardboardBoxClosed } from "react-icons/gi";
import cooking from "../../assets/cooking1.png"

const trackingSteps = [
  { title: "Placed", icon: <TbChecklist />, completed: true, date: "on 19th Oct" },
  { title: "Processing", icon: <img src={cooking} alt="cooking" />, completed: true, date: "on 19th Oct" },
  { title: "Confirmed", icon: <GiCardboardBoxClosed />, completed: true, date: "on 19th Oct" },
  { title: "Dispatched", icon: <FaTruckFast />, completed: false },
  { title: "Delivery by Tomorrow", icon: <TiInputChecked />, completed: false },
];

export default function Track() {
  const lastCompletedIndex = trackingSteps.reduce((acc, step, index) => {
    return step.completed ? index : acc;
  }, -1);

  return (
    <div className="p-6">
      <div className="pl-6 relative">
        {trackingSteps.map((step, index) => (
          <div key={index} className="relative">
            {index !== trackingSteps.length - 1 && index !== lastCompletedIndex && (
              <div
                className={`absolute top-0 left-[-30px] w-0.5 ${
                  index === lastCompletedIndex - 1 ? "h-[220px]" : "h-[60px]"
                } ${step.completed ? "bg-Darkgreen" : "bg-gray-500"}`}
              ></div>
            )}

            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center absolute left-[-44px] top-0 text-white ${
                step.completed ? "bg-Darkgreen" : "bg-gray-300"
              }`}
            >
              {step.icon}
            </div>

            <div className={`${step.completed ? "text-black" : "text-gray-400"} flex flex-col pb-8`}>
              <div className="flex space-x-3">
                <p className={`font-medium ${index === lastCompletedIndex ? "text-Darkgreen" : ""}`}>
                  {step.title}
                </p>
                {step.date && <p className="font-light text-xs md:text-sm">{step.date}</p>}
              </div>
              
              {index === lastCompletedIndex && (
                <>
                  <p className="text-base font-bold my-1">Pending</p>
                  <p className="text-xs">
                    Your order is going through its packaging process. We will email you when it is packed and
                    dispatched to the final hub
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}