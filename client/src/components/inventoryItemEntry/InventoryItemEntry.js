import './inventoryItemEntry.css'
import { useContext, useState } from 'react'
import { ModalShow, Item, InventoryItems } from '../../App'
import url from '../../config'
import ItemDescription from '../itemDescription/ItemDescription'
import React from 'react'
export const ShowDescription = React.createContext(false)

function InventoryItemEntry(props) {
  const { title, author, price, stock, description } = props.item
  const [modal, setModal] = useContext(ModalShow)
  const [item, setItems] = useContext(Item)
  const [inventory, setInventory] = useContext(InventoryItems)
  const [showDescription, setShowDescription] = useState(false)
  const handleUpdate = (e) => {
    setItems({ ...props.item, update: true })
    setModal(true)
  }

  const handleDelete = async (e) => {
    try {
      const temp = await fetch(`${url}/api/inventory/book/${props.item._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await temp.json()
      console.log(response)
      setInventory(inventory.filter((item) => item._id !== props.item._id))
      localStorage.setItem('inventory', JSON.stringify(inventory.filter((item) => item._id !== props.item._id)))
    } catch (e) {}
  }

  return (
    <>
      <div className="inventoryItemEntryContainer">
        <div className="inventoryItemTitle">{title}</div>
        <div className="inventoryItemAuthor">{author}</div>
        <div className="inventoryItemPrice">&#8377; {price}</div>
        <div className="inventoryItemStock">{stock}</div>
        <button
          className="inventoryItemShowDetails"
          onClick={() => setShowDescription(true)}
        >
          More Details
        </button>
        <button
          className="inventoryItemEntryDeleteButton"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="inventoryItemEntryUpdateButton"
          onClick={handleUpdate}
        >
          Update
        </button>
        <ShowDescription.Provider value={[showDescription,setShowDescription]}>
          {showDescription && (
            <ItemDescription item={props.item}></ItemDescription>
          )}
        </ShowDescription.Provider>
      </div>
    </>
  )
}

export default InventoryItemEntry
