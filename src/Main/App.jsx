import { useState } from 'react'
import '../Main/App.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../Home/Home.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  )
}

export default App
