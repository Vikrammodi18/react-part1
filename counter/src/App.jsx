import { useState } from "react"

function App(){
  // let counter = 13
  let [counter,setCounter] = useState(15)
  function increaseValue(){
    setCounter(counter=>counter+1)
  }
  function decreaseValue(){
    setCounter(counter=> counter-1)
  }
  return (
    <>
    <h1>hellow</h1>
    <h3>counter:{counter}</h3>
    <button onClick={increaseValue}>increase</button>
    <button onClick={decreaseValue}>decrease</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App