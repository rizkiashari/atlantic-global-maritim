import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Facilities from './pages/Facillities'
import VisiMisi from './pages/VisiMisi'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/visi-misi' element={<VisiMisi />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
