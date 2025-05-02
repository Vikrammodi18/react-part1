import { useState } from 'react'

import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Categories from './pages/Categories.page'
import Product from './pages/Product.page'
import ProductDetails from './pages/ProductDetails.page';
import Rating from './components/ratings.component';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element ={<Product />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/productDetails/:id" element={<ProductDetails/>} />
        
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App
