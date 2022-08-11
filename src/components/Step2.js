import React from "react";

const Step2 = () => {
  return (
    <>
      <div className="font-bold text-3xl flex justify-center">
        <h2>Let's set up a home for all your work</h2>
      </div>
      <div className="text-md flex justify-center p-3 text-gray-500">
        <p>You can always create another workspace later.</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col pt-10 w-96">
          <div className="flex flex-col">
            <label className="text-left py-1 text-sm">
              Workspace Name <span>(optional)</span>
            </label>
            <input
              className="border-2 rounded-sm p-2 text-sm"
              placeholder="Eden"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-left py-1 text-sm">Workspace URL</label>
            <div className="flex-1 border ">
              <input
                className="border-2 rounded-sm p-2 bg-gray-100 w-1/4 text-sm "
                placeholder="www.eden.com"
              />
              <input
                className="border-2 rounded-sm p-2 w-3/4 text-sm"
                placeholder="Example"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
