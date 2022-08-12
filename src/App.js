import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Facilities from './pages/Facillities'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import ServiceDetail from './pages/ServiceDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/services/:uuid' element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
