import Stepper from 'react-stepper-horizontal';
import {
  FaClipboardList,
  FaCreditCard,
  FaCheckCircle,
} from 'react-icons/fa';
import { MdBreakfastDining } from 'react-icons/md';
import { TbCakeRoll } from 'react-icons/tb';

const stepsData = [
  { title: 'Plan', icon: FaClipboardList },
  { title: 'Meals', icon: MdBreakfastDining },
  { title: 'Snacks', icon: TbCakeRoll },
  { title: 'Checkout', icon: FaCreditCard },
  { title: 'Pick', icon: FaCheckCircle },
];

export default function CustomStepper({ currentStep = 0 }) {
  return (
    <div className="w-full mb-10">
      <Stepper
        steps={stepsData.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === index;
          const isComplete = currentStep > index;

          return {
            title: (
              <div className="flex flex-col items-center relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center absolute -top-7 z-10
                    ${isActive || isComplete ? "bg-forest text-white" : "bg-beige text-forest"}
                   shadow-md transition`}
                >
                  <Icon size={20} />
                </div>
                <span
                  className={`text-sm mt-5 ${
                    isActive || isComplete ? "text-forest font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ),
          };
        })}
        activeStep={currentStep}
        size={0}            
        circleFontSize={0}
        circleTop={0}          
      />
    </div>
  );
}
