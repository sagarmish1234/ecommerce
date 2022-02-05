import React, { useState } from 'react'
import './App.css'
import DefaultView from './Common/DefaultVeiw'
export const Message = React.createContext()
export const UserDetails = React.createContext({})
export const InventoryItems = React.createContext([])
export const Cart = React.createContext([])
function App() {
  const [userDetails, setUserDetails] = useState({})
  const [message, setMessage] = useState('')
  const [inventoryItems, setInventoryItems] = useState([])
  const [cart, setCart] = useState([])
  return (
    <>
      <Cart.Provider value={[cart, setCart]}>
        <InventoryItems.Provider value={[inventoryItems, setInventoryItems]}>
          <UserDetails.Provider value={[userDetails, setUserDetails]}>
            <Message.Provider value={[message, setMessage]}>
              <DefaultView></DefaultView>
            </Message.Provider>
          </UserDetails.Provider>
        </InventoryItems.Provider>
      </Cart.Provider>
    </>
  )
}

export default App
