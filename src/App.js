import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Logo from "./components/Logo";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["1", "2", "3", "4"];
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction = newStep++;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="items-center pt-16">
      <Logo />
      <div className="flex justify-center py-10 ">
        <div className="w-80 pb-10">
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>
      </div>
      <div>{displaySteps(currentStep)}</div>
      <div className="flex justify-center">
        <Button
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
}

export default App;
