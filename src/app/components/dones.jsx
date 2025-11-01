import React, { useContext } from "react";
import store from "./store";

export default function Dones() {
  const data = useContext(store);

  return (
    <div className="w-full h-auto pt-10 px-5 md:px-10 lg:px-[10%] xl:px-[15%]">
      <h2 className="w-full text-white mb-4">Completed Tasks - {data.countDones}</h2>
      <nav className="w-full h-auto">
        <ul className="w-full space-y-3">
          {data.dones.map((val, i) => (
            <li key={`done-${i}`} className="group">
              <div className="bg-[#15101c] flex items-center p-4 rounded-lg hover:bg-[#1a131f] transition-colors">
                <div className="flex items-center flex-1">
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden" // Changed from sr-only to hidden
                      onChange={() => data.undo(i)}
                      checked
                    />
                    <div className="w-5 h-5 border-2 border-[#6fbfa3] rounded flex items-center justify-center bg-[#6fbfa3]">
                      <svg
                        className="w-3 h-3 text-[#15101c]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </label>
                  <span className="text-[#6fbfa3] line-through ml-3 text-base">
                    {val}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
