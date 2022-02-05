import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { UserDetails} from '../App'
import {InventoryItems} from "../App"
function DefaultVeiw() {
  const [userDetails, setUserDetails] = useContext(UserDetails)
  const [inventoryItems, setInventoryItems] = useContext(InventoryItems)
  const navigate = useNavigate()
  const Visited = () => {
    if (localStorage.userDetails) {
      setUserDetails(JSON.parse(localStorage.userDetails))
      console.log('Local Storage is there')
      if (JSON.parse(localStorage.userDetails).isManager) navigate('/inventory')
    }
    if(localStorage.inventory){
      setInventoryItems(JSON.parse(localStorage.inventory))
    }
    
  }
  useEffect(() => {
    // return () => {
    Visited()
    // }
  }, [])

  return (
  <div style={{backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default DefaultVeiw
