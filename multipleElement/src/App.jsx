import { useState } from 'react'
import Cards from './cardComponent/Card'
import './App.css'
import NavBar from './navbar/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <NavBar />
     <Cards />

    </div>
     
   
    </>
  )
}

export default App
