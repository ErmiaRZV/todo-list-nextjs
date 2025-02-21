import React, { useContext } from 'react'
import store from './store'
export default function Header() {
    const data = useContext(store)
  return (
    <header className='w-full lg:container mx-auto h-28  bg-[#0d0714] justify-center gap-3 lg:gap-5  flex px-4 '>
        <Inp />
        <Btn />
    </header>
  )
}


function Inp(){
    const data = useContext(store)
    return(
        <div className='h-full  flex justify-center items-center ' >
            <input onKeyUp={data.keyUp} ref={data.inpRef} type="text" name="" id="" value={data.inp} onChange={(e)=> data.setInp(e.target.value)} placeholder='Add a new task' className='border rounded-md border-[#2b104d] py-1 md:py-2 ps-4 pe-12 bg-[#0d0714] outline-none text-white' />
        </div>
    )
}

function Btn(){
    const data = useContext(store)
    return(
        <div className='h-full  flex justify-center items-center ' >
            <button onClick={data.btn} className='flex w-fit bg-[#9d78cf] rounded-md p-1 md:p-2 text-white ' >
                {data.btnIcon}
            </button>
        </div>
    )
}