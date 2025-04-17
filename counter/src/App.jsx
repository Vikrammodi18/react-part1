import { useState } from "react"
import ButtonSubscribe from "./subscribed"
function App(){
  // let counter = 13
  let [counter,setCounter] = useState(15)
  function increaseValue(){
    if(counter<20){
      setCounter(prev=>prev+1)

    }
  }
  function decreaseValue(){
    if(counter>0){
      setCounter(prev=> prev-1)
    }
  }
  return (
    <>
    <h1>hellow</h1>
    <h3>counter:{counter}</h3>
    <button onClick={increaseValue}>increase</button>
    <button onClick={decreaseValue}>decrease</button>
    <footer>{counter}</footer>
    <ButtonSubscribe/>
    </>

  )
}

export default App