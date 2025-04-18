import { useState } from 'react'

import './App.css'

function App() {
const [color,setColor] = useState("green")


  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-2xl'>
              <button className='outline-none px-4 py-3 rounded-full text-white shadow-sm'
                style={{backgroundColor:"red"}}
                onClick={()=> setColor("red")}
              > red</button>
              <button className='outline-none px-4 py-3 rounded-full text-white shadow-sm'
                style={{backgroundColor:"olive"}}
                onClick={()=> setColor("olive")}
              > olive</button>
              <button className='outline-none px-4 py-3 rounded-full text-white shadow-sm'
                style={{backgroundColor:"blue"}}
                onClick={()=> setColor("blue")}
              > blue</button>
              <button className='outline-none px-4 py-3 rounded-full text-white shadow-sm'
                style={{backgroundColor:"black"}}
                onClick={()=> setColor("black")}
              > black</button>
              <button className='outline-none px-4 py-3 rounded-full text-white shadow-sm'
                style={{backgroundColor:"green"}}
                onClick={()=> setColor("green")}
              > green</button>
              
            </div>
          
        </div>
      </div>
    </>
  )
}

export default App
