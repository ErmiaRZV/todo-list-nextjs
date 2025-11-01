import React, { useContext } from "react";
import store from "./store";

export default function Tasks() {
  const data = useContext(store);

  return (
    <div className="w-full h-auto pt-10 px-5 md:px-10 lg:px-[10%] xl:px-[15%]">
      <h2 className="w-full text-white mb-4">Active Tasks - {data.countTasks}</h2>
      <nav className="w-full h-auto">
        <ul className="w-full space-y-3">
          {data.tasks.map((val, i) => (
            <li key={`task-${i}`} className="group">
              <div className="bg-[#15101c] flex items-center p-4 rounded-lg hover:bg-[#1a131f] transition-colors">
                <div className="flex items-center flex-1">
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      onChange={() => data.conf(i)}
                    />
                    <div className="w-5 h-5 border-2 border-[#6fbfa3] rounded peer-checked:bg-[#6fbfa3] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#15101c] hidden peer-checked:block"
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
                  <span className="text-[#6fbfa3] ml-3 text-base">
                    {val}
                  </span>
                </div>
                <div className="flex space-x-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => data.edit(i)}
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    title="Edit task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => data.del(i)}
                    className="text-red-500 hover:text-red-400 transition-colors"
                    title="Delete task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
