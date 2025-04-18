
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6)
  const[numberAllowed,setNumberAllowed]= useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] = useState("")

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number= "0123456789"
    let specialChar = "!#$%&*+,-./:;=?@^_|~"
    if(numberAllowed) str+=number
    if(charAllowed) str+=specialChar

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  //useRef hook
  const passwordRef = useRef(null)

  const copyToClipbboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed,generatePassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3' >Password Generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        placeholder='password'
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 '
        onClick={copyToClipbboard}
        >copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={32}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> {setLength(e.target.value)}}
          />
          <label >length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked= {numberAllowed}
          id='numberInput'
          onChange={()=>{ setNumberAllowed(prev => !prev)} }
          />
          <label htmlFor="">number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked= {charAllowed}
          id='numberInput'
          onChange={()=>{ setCharAllowed(prev => !prev)} }
          />
          <label htmlFor="">character</label>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
