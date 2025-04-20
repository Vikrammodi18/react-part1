import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount] = useState(0)
  const[name,setName] = useState("null")
  console.log(count)
  return (
    <>
     <div style={{textAlign:"center"}}>
      <h3>{count}</h3>
      <h4>{name}</h4>
      <button onClick={()=> {
        setCount(pre=> pre+1)
        setName("vikram")
        
        
      }}>clickme</button>
     </div>
    </>
  )
}

export default App
