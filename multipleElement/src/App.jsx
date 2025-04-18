import { useState } from 'react'
import Cards from './cardComponent/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-wrap' key="key">
     <Cards />
     
    </div>
    </>
  )
}

export default App
