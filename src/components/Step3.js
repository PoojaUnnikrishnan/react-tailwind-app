import React from "react";

const Step3 = () => {
  return (
    <>
      <div className="font-bold text-3xl flex justify-center">
        <h2>How are you planning to use Eden?</h2>
      </div>
      <div className="text-md flex justify-center p-3 text-gray-500 ">
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="flex justify-center">
          <div className="pt-10">
            <div className="flex gap-4 px-10 justify-evenly">
              <div className="border rounded-md p-5 hover:border-indigo-500">
                <div className="py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  hover:fill-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="font-bold text-left ">
                  <p>For myself</p>
                </div>
                <div className="text-left text-sm flex-wrap w-32">
                  <p>Write better. Think more clearly. Stay organized.</p>
                </div>
              </div>
              <div className="border rounded-md p-5 hover:border-indigo-500">
                <div className="py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 hover:fill-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div className="font-bold text-left">
                  <p> With my team</p>
                </div>
                <div className="text-left text-sm flex-wrap w-32">
                  <p>Wikis, docs, tasks & projects, all in one place.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Step3;
