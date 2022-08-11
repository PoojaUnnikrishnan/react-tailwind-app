import React from "react";

const Step1 = () => {
  return (
    <>
      <div className="font-bold flex justify-center text-3xl">
        <h2>Welcome! First things first...</h2>
      </div>
      <div className="p-3  flex justify-center text-md text-gray-500 ">
        <p>You can always change them later</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col pt-10 w-96">
          <div className="flex flex-col">
            <label className="text-left py-1 text-sm">Full Name</label>
            <input
              className="border p-2 text-sm rounded-sm"
              placeholder="Steve Jobs"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-left py-1 text-sm">Display Name</label>
            <input
              className="border p-2 text-sm rounded-sm"
              placeholder="Steve"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
