import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from "./Components/Login/Login"
function DefaultVeiw() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          
      </Routes>
    </>
  )
}

export default DefaultVeiw
