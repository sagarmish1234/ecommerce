import './App.css'
import React, { useState, useEffect } from 'react'
import ManagerHome from './pages/home/managerHome/ManagerHome'
import {
  BrowserRouter as Router,
  useNavigate
} from 'react-router-dom'
import url from './config'
import Home from './pages/home/Home'

//exports
export const InventoryItems = React.createContext([])
export const Item = React.createContext({})
export const User = React.createContext({})
export const ModalShow = React.createContext(false)
export const CartItems = React.createContext([])
//Component
function App() {
  const [items, setItems] = useState({})
  const [user, setUser] = useState('')
  const [inventory, setInventory] = useState([])
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data')
      const temp = await fetch(`${url}/api/inventory/books/all/get`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await temp.json()
      localStorage.inventory = JSON.stringify(response)
      setInventory(response.sort((a, b) => a.title.localeCompare(b.title)))
    }
    fetchData()

    if (localStorage.user) {
      setUser(JSON.parse(localStorage.user))
      if(user.isManager){
        navigate('/inventory')
      }
    }
    if(localStorage.cart){
      setCart(JSON.parse(localStorage.cart))
    }
  }, [])

  return (
    <>
      <InventoryItems.Provider value={[inventory, setInventory]}>
        <ModalShow.Provider value={[modal, setModal]}>
          <User.Provider value={[user, setUser]}>
            <CartItems.Provider value={[cart, setCart]}>
              <Item.Provider value={[items, setItems]}>
                <User.Provider value={[user, setUser]}>
                  <Home></Home>
                  {/* <ManagerHome></ManagerHome> */}
                </User.Provider>
              </Item.Provider>
            </CartItems.Provider>
          </User.Provider>
        </ModalShow.Provider>
      </InventoryItems.Provider>
    </>
  )
}

export default App
