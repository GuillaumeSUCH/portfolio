import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo2() {
  return (
    <div className="">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white text-center mb-4 relative z-50">
            Ve History
          </h1>

          <p className="font-normal text-base text-center text-slate-500 mb-4 relative z-50">
            Quizz histoire de la Ve République
          </p>

          <div className="flex gap-2 align-center flex-row">
            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              HTML
            </button>
            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Javascript
            </button>
            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              CSS
            </button>
          </div>

          <button className="rounded-full mt-5 px-2 border flex items-center justify-center mb-4 border-gray-500 text-gray-100 bg-gray-700 mx-auto">
            Go Github
          </button>
          <Meteors number={50} />
        </div>
      </div>
    </div>
  );
}
