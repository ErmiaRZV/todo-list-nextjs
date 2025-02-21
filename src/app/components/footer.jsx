import React, { useContext } from 'react'
import store from './store'
import '../css/fontello.css'
export default function Footer() {
    const data = useContext(store)
  return (
    <footer className='flex w-full h-14 items-center mt-20  content-center   bg-[#0d0714]  ' >
            <MyName />
            <MySocial />
    </footer>
  )
}


function MyName(){
    return(
        <h1 className='w-1/2 h-full flex justify-center items-center text-xl text-[#9d78cf] ' >
            Ermia Razavi
        </h1>
    )
}
function MySocial(){
    return(
        <nav className='w-1/2 h-full ' >
            <ul className='w-full h-full flex flex-wrap items-center justify-center gap-3 ' >
                <li className='flex items-center' ><a className='p-1 rounded-full text-[#9d78cf] duration-300 hover:text-[#0d0714] hover:bg-[#9d78cf] icon-linkedin text-lg items-center'  href="https://linkedin.com/in/ermia-razavi-a611312a3" target='_blank' ></a></li>
                <li className='flex items-center' ><a className='p-1 rounded-full text-[#9d78cf] duration-300 hover:text-[#0d0714] hover:bg-[#9d78cf] icon-github-circled text-lg items-center'  href="https://github.com/ErmiaRZV" target='_blank' ></a></li>
            </ul>
        </nav>
    )
}