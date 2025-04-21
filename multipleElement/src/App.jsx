import { useState } from 'react'

import './App.css'

import Product from './productPage/product'
import SideBar from './sidebar/Sidebar'
import Categories from './categoriesPage/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Product /> */}
    
    <Categories />
    </>
  )
}

export default App
