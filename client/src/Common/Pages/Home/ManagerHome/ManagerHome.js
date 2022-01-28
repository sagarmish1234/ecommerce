import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Inventory from '../../../Components/Inventory/Inventory'
function ManagerHome() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </>
  )
}

export default ManagerHome
