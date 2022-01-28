import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Inventory from '../../../Components/Inventory/Inventory'
import Orders from '../../../Components/Orders/Orders'
function ManagerHome() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>      
      </Routes>
    </>
  )
}

export default ManagerHome
