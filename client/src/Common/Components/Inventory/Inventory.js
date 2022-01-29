import React, { useEffect, useState, useContext } from 'react'
import './inventory.css'
import { Search } from '@mui/icons-material'
import { UserDetails } from '../../../App'
import { InventoryItems } from '../../Pages/Home/ManagerHome/ManagerHome'
import url from '../../CustomerConfig'
import ItemEntry from '../ItemEntry/ItemEntry'
import { Item } from '../../Pages/Home/ManagerHome/ManagerHome'

function Inventory() {
  const [inventoryItems, setInventoryItems] = useContext(InventoryItems)
  const [item, setItem] = useContext(Item)
  const handleChange = (e) => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }
  const updateItem = async (_id) => {
    try {
      console.log(_id)
      const temp = await fetch(`${url}/api/inventory/${_id}/bookUpdate`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(item)
      })
      const response = await temp.json()
      alert(response.message)
      console.log(response.books)
      setInventoryItems(response.books)
      setItem({...item,showModal:!item.showModal})
    } catch (err) {
      console.log(err)
    }
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
      setItem({ ...item, showModal: !item.showModal, update: false })
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
        console.log('Inside fetch')
        console.error(err)
      }
    }
    FetchData()
  }, [])

  return (
    <>
      <Item.Provider value={[item, setItem]}>
        <div className="inventoryContainer">
          <div className="inventoryContent">
            <ul className="inventoryContentHead">
              <div className="inventorySearch">
                <input
                  type="text"
                  className="inventorySearchBox"
                  name="search"
                />
                <button className="inventorySearchButton">
                  <Search
                    style={{ fontWeight: 'bold !important', fontSize: '2rem' }}
                  ></Search>
                </button>
              </div>
              <button
                className="inventoryAddItem"
                onClick={() => {
                  setItem({ ...item, showModal: !item.showModal })
                }}
              >
                + Add Item
              </button>
            </ul>
            <div className="inventoryItems">
              {inventoryItems.map((item) => {
                return (
                  <>
                    <ItemEntry key={item._id} item={item}></ItemEntry>
                  </>
                )
              })}
            </div>
          </div>
          {item.showModal && (
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
                {!item.update ? (
                  <button
                    className="inventoryModalButton"
                    style={{ backgroundColor: 'darkgreen' }}
                    onClick={AddItem}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    className="inventoryModalButton"
                    style={{ backgroundColor: 'darkgreen' }}
                    onClick={() => {
                      console.log(item._id)
                      updateItem(item._id)
                    }}
                  >
                    Update
                  </button>
                )}
                <button
                  type="submit"
                  className="inventoryModalButton"
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => {
                    setItem({
                      ...item,
                      showModal: !item.showModal,
                    })
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </Item.Provider>
    </>
  )
}

export default Inventory
