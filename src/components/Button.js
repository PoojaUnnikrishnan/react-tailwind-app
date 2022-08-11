import React from "react";

const Button = ({ handleClick, steps, currentStep }) => {
  return (
    <button
      onClick={() => handleClick()}
      className="bg-indigo-500 px-6 py-2 mt-5 rounded-md text-white hover:bg-indigo-300 w-96"
    >
      {currentStep === steps.length ? "Launch Eden" : "Create Workspace"}
    </button>
  );
};

export default Button;
