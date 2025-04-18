import { useState } from 'react'
import Cards from './cardComponent/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Cards />
     
   
    </>
  )
}

export default App
