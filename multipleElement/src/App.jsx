import { useState } from 'react'

import './App.css'


import Categories from './pages/Categories.page'
import Product from './pages/Product.page'
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
