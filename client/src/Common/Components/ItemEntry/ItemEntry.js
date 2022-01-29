import React, { useContext } from 'react'
import './itemEntry.css'
import url from '../../CustomerConfig'
import { InventoryItems } from '../../Pages/Home/ManagerHome/ManagerHome'
import { Item } from '../../Pages/Home/ManagerHome/ManagerHome'
function ItemEntry(props) {
  const { title, author, price, stock,image } = props.item
  const [inventoryItems, setInventoryItems] = useContext(InventoryItems)
  const [item, setItem] = useContext(Item)
  const deleteItem = async () => {
    try {
      const temp = await fetch(
        `${url}/api/inventory/${props.item._id}/bookDelete`,
        {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
        },
      )
      const response = await temp.json()
      alert(response.message)
      console.log(response.books)
      setInventoryItems(response.books)
    } catch (err) {
      console.log(err)
    }
  }
  const updateItem = async () => {
    try {
      const temp = await fetch(
        `${url}/api/inventory/${props.item._id}/bookUpdate`,
        {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
        },
      )
      const response = await temp.json()
      alert(response.message)
      console.log(response.books)
      setInventoryItems(response.books)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="itemContainer">
        <span className="itemTitle">{title}</span>
        <img src={image} alt="img" className='itemImage'/>
        <span className="itemAuthor">{author}</span>
        <span className="itemPrice">&#8377;{price}</span>
        <span className="itemStock">{stock}</span>
        <button className="itemDeleteButton" onClick={deleteItem}>
          Delete
        </button>
        <button
          className="itemUpdateButton"
          onClick={() => {
            setItem({ ...props.item, showModal: !item.showModal, update: true })
          }}
        >
          Update
        </button>
      </div>
    </>
  )
}

export default ItemEntry
