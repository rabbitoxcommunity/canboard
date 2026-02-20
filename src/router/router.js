import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Mission from '../pages/Mission'
import Contact from '../pages/Contact'

function RouteHandler() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}

export default RouteHandler