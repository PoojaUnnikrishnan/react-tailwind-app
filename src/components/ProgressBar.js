import React, { useEffect, useState, useRef } from "react";

const ProgressBar = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    //state of each step is given
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displayStep = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center "
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-indigo-500 ">
          <div
            className={`rounded-full transition-500 ease-in-out border-2 border-gray-300 h-8 w-8 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-indigo-500 text-white font-bold border border-indigo-500"
                : ""
            }`}
          >
            {/* display number */}
            {step.completed ? (
              <span className="text-white font-bold text-xl">{index + 1}</span>
            ) : (
              index + 1
            )}
          </div>
        </div>
        {/* display line  */}
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-indigo-500" : "border-gray-200"
          }`}
        ></div>
      </div>
    );
  });

  return <div className={"flex items-center "}>{displayStep}</div>;
};

export default ProgressBar;
