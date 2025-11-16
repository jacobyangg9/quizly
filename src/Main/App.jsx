import { useState } from 'react'
import '../Main/App.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../Home/Home.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'
import Create from '../Create/Create.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/create" element={<Create />}/>
    </Routes>
  )
}

export default App
