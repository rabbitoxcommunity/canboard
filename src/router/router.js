import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Vision from '../pages/Vision'
import Innovation from '../pages/Innovation'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import GetStarted from '../pages/GetStarted'
import PHome from '../pages/Panelex/PHome'
import PAbout from '../pages/Panelex/PAbout'
import PMission from '../pages/Panelex/PMission'
import PProducts from '../pages/Panelex/PProducts'
import ProductDetails from '../pages/Panelex/ProductDetails'
import PContact from '../pages/Panelex/PContact'

function RouteHandler() {

  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/innovation" element={<Innovation />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />

      {/* PANALEX */}
      <Route path="/panelex" element={<PHome />} />
      <Route path="/panelex/about" element={<PAbout />} />
      <Route path="/panelex/mission" element={<PMission />} />
      <Route path="/panelex/products" element={<PProducts />} />
      <Route path="/panelex/product-details/:id" element={<ProductDetails />} />
      <Route path="/panelex/contact" element={<PContact />} />
    </Routes>
  )
}

export default RouteHandler