import './inventoryModal.css'
import { Close } from '@mui/icons-material'
import { ModalShow, Item, InventoryItems } from '../../App'
import { useContext, useState } from 'react'
import url from '../../config'
import LoadingSpin from 'react-loading-spin'

function InventoryModal() {
  const [modal, setModal] = useContext(ModalShow)
  const [item, setItems] = useContext(Item)
  const [showSpin, setShowSpin] = useState(false)
  const [inventory, setInventory] = useContext(InventoryItems)
  const handleChange = (e) => {
    setItems({ ...item, [e.target.name]: e.target.value })
  }

  const imageUpload = async (e) => {
    setShowSpin(true)
    var formdata = new FormData()

    formdata.append('file', e.target.files[0])
    formdata.append('cloud_name', 'sagarmish1234')
    formdata.append('upload_preset', 'tutorial')

    const temp = await fetch(
      'https://api.cloudinary.com/v1_1/sagarmish1234/auto/upload',
      {
        method: 'post',
        mode: 'cors',
        body: formdata,
      },
    )
    const response = await temp.json()
    console.log(response)
    setItems({ ...item, image: response.secure_url })
    setShowSpin(false)
  }

  const UpdateItem = async (e) => {
    setShowSpin(true)
    e.preventDefault()
    const temp = await fetch(`${url}/api/inventory/book/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    const response = await temp.json()
    console.log(response)
    setInventory(
      inventory
        .filter((item) => item._id !== response._id)
        .concat(response)
        .sort((a, b) => a.title.localeCompare(b.title)),
    )
    setShowSpin(false)
    setModal(false)
  }
  const AddItem = async (e) => {
    e.preventDefault()

    if (
      !item.title ||
      !item.author ||
      !item.price ||
      !item.description ||
      !item.stock ||
      !item.image
    ) {
      alert('Please fill all the fields')
      return
    }

    try {
      const temp = await fetch(`${url}/api/inventory/book/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
      const response = await temp.json()
      setInventory(
        [...inventory, response].sort((a, b) => a.title.localeCompare(b.title)),
      )
      console.log(response)
      setModal(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="inventoryModalBackground">
      <Close
        className="inventoryModalCloseButton"
        onClick={() => setModal(false)}
      ></Close>
      <form className="inventoryModalContainer">
        <label htmlFor="image" className="inventoryModalImage">
          Upload Image &nbsp;
          {showSpin && <LoadingSpin size="20px" width="3px"></LoadingSpin>}
        </label>
        <input
          type="file"
          onChange={(e) => {
            imageUpload(e)
          }}
          id="image"
          hidden={true}
          name="image"
        />

        <input
          type="text"
          className="inventoryModalInput"
          name="title"
          value={item.title}
          onChange={handleChange}
          placeholder="Enter the Title"
        />
        <input
          type="text"
          className="inventoryModalInput"
          name="author"
          value={item.author}
          onChange={handleChange}
          placeholder="Enter the Author"
        />
        <input
          type="text"
          onChange={handleChange}
          className="inventoryModalInput"
          name="price"
          value={item.price}
          placeholder="Enter the Price"
        />
        <input
          type="text"
          onChange={handleChange}
          className="inventoryModalInput"
          name="stock"
          value={item.stock}
          placeholder="Enter the Stock"
        />
        <textarea
          name="description"
          onChange={handleChange}
          cols="30"
          rows="10"
          value={item.description}
          placeholder="Enter the Description"
          style={{ height: '100px' }}
          className="inventoryModalInput"
        ></textarea>
        {!item.update && (
          <button className="inventoryModalButton" onClick={AddItem}>
            Add &nbsp;
            {showSpin && <LoadingSpin size="20px" width="3px"></LoadingSpin>}
          </button>
        )}
        {item.update && (
          <button className="inventoryModalButton" onClick={UpdateItem}>
            Update &nbsp;
            {showSpin && <LoadingSpin size="20px" width="3px"></LoadingSpin>}
          </button>
        )}
      </form>
      {item.image && (
        <img
          src={item.image}
          alt="img"
          className="inventoryModalImagePreview"
        />
      )}
    </div>
  )
}

export default InventoryModal
