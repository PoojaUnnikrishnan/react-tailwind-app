import React from "react";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

const Step4 = () => {
  return (
    <div className=" h-screen flex justify-center items-center border-8">
      <div className=" flex flex-col p-10">
        <Logo />
        <ProgressBar />
        <div className="flex justify-center p-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 fill-indigo-500"
            viewBox="0 0 20 20"
            fill="indigo"
            fontSize="large"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="font-bold flex justify-center px-5 text-2xl">
          <h2>Congratulations, Eren!</h2>
        </div>
        <div className="p-3 flex justify-center text-md text-gray-500 ">
          <p>you have completed onboarding, you can start using the Eden!</p>
        </div>

        <div className="flex justify-center px-9">
          <button className="bg-indigo-500 px-6 py-2 w-full mt-4 rounded-md text-white">
            Launch Eden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
