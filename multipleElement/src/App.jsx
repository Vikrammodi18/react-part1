import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './cards/Cards'
import NavBar from './navBar/NavBar'
import Search from './search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Search />
    {/* <NavBar /> */}
      {/* <Card /> */}
    </>
  )
}

export default App
