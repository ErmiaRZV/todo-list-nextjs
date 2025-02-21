import React, { useContext } from "react";
import store from "./store";
export default function Tasks() {
  const data = useContext(store);
  return (
    <div className="w-full h-auto px-5 md:px-10 lg:px-[10%] xl:px-[15%] ">
      <h2 className="w-full text-white ">Tasks to do - {data.countTasks} </h2>
      <nav className="w-full h-auto flex">
        <ul className="w-full h-full flex flex-wrap">
          {data.tasks && data.tasks.map((val,i) => {
            return (
              <li key={'index'+i} className="bg-[#15101c] gap-3 flex flex-wrap w-full items-center content-center justify-between mt-5 px-5 py-5 rounded-lg ">
                <span className="text-[#8868b3]">{val}</span>
                <div className="*:text-[#8868b3] flex flex-wrap gap-5 ">
                  <span className="cursor-pointer" onClick={()=> data.conf(i)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
</span>
                  <span className="cursor-pointer" onClick={()=> data.edit(i)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
</svg>
</span>
                  <span className="cursor-pointer" onClick={()=> data.del(i)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
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
