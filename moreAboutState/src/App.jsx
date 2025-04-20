import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './component/One'
import Two from './component/Two'

function App() {
  const[count,setCount] = useState(0)
  const[name,setName] = useState("null")
  console.log(count)
  return (
    <>

    <One name="manisha" />
    <Two name="vikram"/>


     {/* <div style={{textAlign:"center"}}>
      <h3>{count}</h3>
      <h4>{name}</h4>
      <button onClick={()=> {
        setCount(pre=> pre+1)
        setName("vikram")
        
        
      }}>clickme</button>
     </div> */}

    </>
  )
}

export default App
