import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

const Step1 = () => {
  return (
    <div className=" h-screen flex justify-center items-center border-8">
      <div className=" flex flex-col p-10">
        <Logo />
        <ProgressBar />
        <div className="font-bold flex justify-center px-5 text-3xl">
          <h2>Welcome! First things first...</h2>
        </div>
        <div className="p-3  flex justify-center text-md text-gray-800 ">
          <p>You can always change them later</p>
        </div>
        <div className=" p-5">
          <div className="flex flex-col">
            <label className="text-left py-1 text-sm">Full Name</label>
            <input
              className="border p-2 text-sm rounded-sm"
              placeholder="Steve Jobs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-left py-1 text-sm">Display Name</label>
            <input
              className="border p-2 text-sm rounded-sm"
              placeholder="Steve"
            />
          </div>

          <div className="flex  justify-center ">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
