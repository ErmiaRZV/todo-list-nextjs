import React, { useContext } from "react";
import store from "./store";
export default function Dones() {
  const data = useContext(store);

  return (
    <div className="w-full h-auto pt-10 px-5 md:px-10 lg:px-[10%] xl:px-[15%] ">
      <h2 className="w-full text-white ">Done - {data.countDones} </h2>
      <nav className="w-full h-auto flex">
        <ul className="w-full h-full flex flex-wrap">
          {data.dones.map((val, i) => {
            return (
              <li
                key={"index" + i}
                className="bg-[#15101c] flex flex-wrap w-full items-center content-center justify-between mt-5 px-5 py-5 rounded-lg "
              >
                <span className="text-[#6fbfa3] line-through ">{val}</span>
                <div className="*:text-[#6fbfa3] flex flex-wrap gap-5 ">
                  <span className="cursor-pointer" onClick={()=>data.undo(i)} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.53 9.53a.75.75 0 0 1-1.06 0l-4.72-4.72V15a6.75 6.75 0 0 1-13.5 0v-3a.75.75 0 0 1 1.5 0v3a5.25 5.25 0 1 0 10.5 0V4.81L9.53 9.53a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
