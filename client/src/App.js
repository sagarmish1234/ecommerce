import './App.css'
import React, { useState, useEffect } from 'react'
import ManagerHome from './pages/home/managerHome/ManagerHome'
import { BrowserRouter as Router } from 'react-router-dom'
import url from './config'
import Home from './pages/home/Home'

export const InventoryItems = React.createContext([])
export const Item = React.createContext({})
export const User = React.createContext({})
export const ModalShow = React.createContext(false)
function App() {
  const [items, setItems] = useState({})
  const [user, setUser] = useState({})
  const [inventory, setInventory] = useState([])
  const [modal, setModal] = useState(false)

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

    if (localStorage.inventory) {
      setInventory(
        JSON.parse(localStorage.inventory).sort((a, b) =>
          a.title.localeCompare(b.title),
        ),
      )
    } else fetchData()
  }, [])

  return (
    <>
      <Router>
        <InventoryItems.Provider value={[inventory, setInventory]}>
          <ModalShow.Provider value={[modal, setModal]}>
            <User.Provider value={[user, setUser]}>
              <Item.Provider value={[items, setItems]}>
                <Home></Home>
                {/* <ManagerHome></ManagerHome> */}
              </Item.Provider>
            </User.Provider>
          </ModalShow.Provider>
        </InventoryItems.Provider>
      </Router>
    </>
  )
}

export default App
