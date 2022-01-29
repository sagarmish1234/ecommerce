import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inventory from '../../../Components/Inventory/Inventory'
import Orders from '../../../Components/Orders/Orders'
export const InventoryItems = React.createContext([])
export const Item = React.createContext({
  title: '',
  author: '',
  price: '',
  stock: '',
  image:"",
  showModal: false,
  update:false
})

function ManagerHome() {
  const [inventoryItems, setInventoryItems] = useState([])
  const [item, setItem] = useState({
    title: '',
    author: '',
    price: '',
    stock: '',
    showModal: false,
  })
  return (
    <>
      <InventoryItems.Provider value={[inventoryItems, setInventoryItems]}>
        <Item.Provider value={[item, setItem]}>
          <Routes>
            <Route path="/inventory" element={<Inventory></Inventory>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>
          </Routes>
        </Item.Provider>
      </InventoryItems.Provider>
    </>
  )
}

export default ManagerHome
