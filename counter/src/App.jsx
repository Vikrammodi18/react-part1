
import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)
  const addValue = ()=>{
   if(counter < 20){
     setCounter(counter=>counter+1)

   }
    
  }
  const decreaseValue = ()=>{
    if(counter>0){
      setCounter(counter => counter -1)
    }
  }

  return (
    <>
     <h1>chai ur code</h1>
     <h3>counter value:{counter}</h3>
     <button onClick={addValue}>increase value</button>
     <button onClick={decreaseValue}>decrease value</button>
     <p>you clicked :{counter} time</p>
     <h1>counter: {counter}</h1>
     <a href="https://react.dev" target='_blank'>click to react.dev</a>
    </>
  )
}

export default App
