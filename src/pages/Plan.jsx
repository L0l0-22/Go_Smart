import { useState } from "react";
import Stepper from "../components/Stepper";
import PlanStep from "../components/steps/PlanStep";
import MealsStep from "../components/steps/MealsStep";
import SnackStep from "../components/steps/SnackStep";
import CheckOutStep from "../components/steps/CheckOut";
import PickStep from "../components/steps/PickStep";

export default function Plan() {
  const [step, setStep] = useState(0); 

  return (
    <div className='mt-32 mb-10 w-[90%] mx-auto'>
        <Stepper currentStep={step} totalSteps={5} />
        <div className="mt-10">
        {step === 0 && 
        <PlanStep onNext={() => setStep(1)} />
        }
        {step === 1 &&         
        <MealsStep 
        onBack={() => setStep(0)}
        onNext={() => setStep(2)} />
        }
        {step === 2 &&         
        <SnackStep 
        onBack={() => setStep(1)}
        onNext={() => setStep(3)} />
        }
        {step === 3 &&         
        <CheckOutStep 
        onBack={() => setStep(2)}
        onNext={() => setStep(4)} />
        }
         {step === 4 &&         
        <PickStep 
        onBack={() => setStep(3)}
        />
        }
      </div>
    </div>
  );
}

