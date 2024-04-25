import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Aboutpage from './pages/Aboutpage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
