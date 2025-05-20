import React from 'react'
import Header from './Components/Header/Header'
import HomePage from './pages/HomePage'
import Footer from './Components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product/Product'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App

