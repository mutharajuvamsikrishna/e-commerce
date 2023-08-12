import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import Home from './Home'
import CartItems from './CartItems'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
 
  return (
    <>
      <div className='maincontainer'>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/cartitems" element={<CartItems/>} />
</Routes>
</Router>

       </div>
    </>
  )
}

export default App
