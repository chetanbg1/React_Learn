import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
 let [counter , setCounter] =  useState(0)


const addValue = () =>{
  //counter = counter + 1
  if(counter ===20){
    return
  }
  setCounter(counter +1)
}

const removeValue = () =>{
  //counter = counter + 1
  if(counter ===0){
    return
  }
  setCounter(counter - 1)
}

  return (
    <>
      <h1>don counter</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
