import React, { useEffect, useState, useContext } from 'react'
import './inventory.css'
import { Search } from '@mui/icons-material'
import { UserDetails } from '../../../App'
import { InventoryItems } from '../../Pages/Home/ManagerHome/ManagerHome'
import url from '../../CustomerConfig'
import ItemEntry from '../ItemEntry/ItemEntry'
function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([])
  const [item, setItem] = useState({
    title: '',
    author: '',
    price: '',
    stock: '',
  })
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  const AddItem = async (e) => {
    e.preventDefault()
    try {
      const temp = await fetch(`${url}/api/inventory/newBook`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(item),
      })
      const response = await temp.json()
      setInventoryItems(response.message)
      alert('The Book Successfully added')
      setShowModal(!showModal)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function FetchData() {
      try {
        const temp = await fetch(`${url}/api/inventory/bookGetAll`, {
          method: 'GET',
        })
        const response = await temp.json()
        console.log(response)
        localStorage.inventory = JSON.stringify(response.message)
        setInventoryItems(response.message)
      } catch (err) {
        console.error(err)
      }
    }
    FetchData()
  }, [])

  return (
    <>
      <div className="inventoryContainer">
        <div className="inventoryContent">
          <ul className="inventoryContentHead">
            <div className="inventorySearch">
              <input type="text" className="inventorySearchBox" name="search" />
              <button className="inventorySearchButton">
                <Search
                  style={{ fontWeight: 'bold !important', fontSize: '2rem' }}
                ></Search>
              </button>
            </div>
            <button
              className="inventoryAddItem"
              onClick={() => {
                setShowModal(!showModal)
              }}
            >
              + Add Item
            </button>
          </ul>
          <div className="inventoryItems">
            {inventoryItems.map((item) => {
              return <ItemEntry key={item._id} item={item}></ItemEntry>
            })}
          </div>
        </div>
        {showModal && (
          <div className="inventoryModalContainer">
            <div className="inventoryModalContent">
              <input
                type="text"
                className="inventoryModalInput"
                name="title"
                value={item.title}
                required
                onChange={handleChange}
                placeholder="Enter Title of the book"
              />
              <input
                type="text"
                className="inventoryModalInput"
                name="author"
                onChange={handleChange}
                value={item.author}
                required
                placeholder="Enter Author of the book"
              />
              <input
                type="text"
                className="inventoryModalInput"
                name="price"
                onChange={handleChange}
                required
                value={item.price}
                placeholder="Enter Price of the book in rupees"
              />
              <input
                type="text"
                className="inventoryModalInput"
                name="stock"
                onChange={handleChange}
                required
                value={item.stock}
                placeholder="Enter Stock of the book"
              />
              <button
                className="inventoryModalButton"
                style={{ backgroundColor: 'darkgreen' }}
                onClick={AddItem}
              >
                Add
              </button>
              <button
                className="inventoryModalButton"
                style={{ backgroundColor: 'blue' }}
                onClick={() => {
                  setShowModal(!showModal)
                }}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Inventory
