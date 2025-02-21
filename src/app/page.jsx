"use client"
import React, { useEffect, useRef, useState } from 'react'
import store from './components/store'
import Header from './components/header'
import Tasks from './components/tasks'
import Dones from './components/dones'
import Footer from './components/footer'
import { stringify } from 'postcss'

export default function page() {
  const inpRef = useRef(null)
  const [inp, setInp] = useState('')
  const [btnIcon, setBtnIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
  )
  const [btnStatus, setBtnStatus] = useState(true)
  const [indexEdit, setIndexEdit] = useState(0)
  const btn = ()=>{
    if (inp != '') {
      if (btnStatus) {
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify([...tasks,inp]))
        setTasks([...tasks,inp])
        setInp('')
        inpRef.current.focus()
        
        }else{
          tasks[indexEdit] = inp
          localStorage.setItem('tasks', JSON.stringify([...tasks]))
          setTasks([...tasks])
          setBtnStatus(true)
          setBtnIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>)
          setInp('')
          inpRef.current.focus()
        }
    }
   
  }
  const keyUp =(e)=>{
    if (e.keycode || e.which == 13) {
      btn()
    }
  }
 



  const [tasks, setTasks] = useState([])
  const [countTasks , setCountTasks] = useState(0)

  useEffect(()=>{
    if (localStorage.getItem('tasks') == ("" || null)) {
      console.log('gfs');
      
      localStorage.setItem('tasks', JSON.stringify([]))
    }else{
      setTasks(JSON.parse(localStorage.getItem('tasks')))
    }
  },[])
  useEffect(()=>{
    if (localStorage.getItem('countTasks') == ('' || null)) {
      localStorage.setItem('countTasks',JSON.stringify(countTasks))
    }else{
      setCountTasks(JSON.parse(localStorage.getItem('countTasks')))
    }
  },[])


  useEffect(()=>{
    let counter = 0
    tasks && tasks.map(()=>{
      counter +=1
    })
    localStorage.setItem('countTasks',JSON.stringify(counter))
    setCountTasks(counter)
  },[tasks])
  const del= i=>{
    tasks.splice(i,1)
    localStorage.setItem('tasks', JSON.stringify([...tasks]))
    setTasks([...tasks])
    inpRef.current.focus()
  }
  const conf =i=>{
    dones.push(tasks[i])
    localStorage.setItem('dones',JSON.stringify([...dones]))
    setDones([...dones])
    tasks.splice(i,1)
    localStorage.setItem('tasks', JSON.stringify([...tasks]))
    setTasks([...tasks])
    inpRef.current.focus()
  }
  const edit = i=>{
    setInp(tasks[i])
    inpRef.current.focus()
    setBtnIcon(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
    </svg>
    )
    setBtnStatus(false)
    setIndexEdit(prev => i)
  }

  

  const [dones, setDones] = useState([])
  const [countDones, setCountDones] = useState(0)
  useEffect(()=>{
    if (localStorage.getItem('dones') == ('' || null)) {
      localStorage.setItem('dones',JSON.stringify([...dones]))
    }else{
      setDones(JSON.parse(localStorage.getItem('dones')))
    }
  },[])
  useEffect(()=>{
    if (localStorage.getItem('countDones') == ('' || null)) {
      localStorage.setItem('countDones',JSON.stringify(countDones))
    }else{
      setCountDones(JSON.parse(localStorage.getItem('countDones')))
    }
  },[])
  useEffect(()=>{
    let counter = 0
    dones && dones.map(()=>{
      counter +=1
    })
    localStorage.setItem('countDones',JSON.stringify(counter))
    setCountDones(counter)
  },[dones])
  const undo = i =>{
    tasks.push(dones[i])
    localStorage.setItem('tasks', JSON.stringify([...tasks]))
    setTasks([...tasks])
    dones.splice(i,1)
    localStorage.setItem('dones',JSON.stringify([...dones]))
    setDones([...dones])
    inpRef.current.focus()

  }

  return (
    <div >
      <store.Provider value={{inp,setInp,btnIcon,countTasks, tasks,countDones,dones,btn,inpRef,del,conf,edit,undo,keyUp}}>
      <Header />
      <Tasks />
      <Dones />
      <Footer />
      </store.Provider>
    </div>
  )
}
