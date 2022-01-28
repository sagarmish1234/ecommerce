import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inventory from '../../../Components/Inventory/Inventory'
import Orders from '../../../Components/Orders/Orders'
export const InventoryItems = React.createContext([])

function ManagerHome() {
  const [inventoryItems, setInventoryItems,price,] = useState([])
  return (
    <>
      <InventoryItems.Provider value={[inventoryItems, setInventoryItems]}>
        <Routes>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </InventoryItems.Provider>
    </>
  )
}

export default ManagerHome
