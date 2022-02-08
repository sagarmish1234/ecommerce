import './inventory.css'
import { Search, AddCircleOutline } from '@mui/icons-material'
import { InventoryItems, Item } from '../../App'
import { useContext, useState } from 'react'
import InventoryModal from '../inventoryModal/InventoryModal'
import { ModalShow } from '../../App'
import InventoryItemEntry from '../inventoryItemEntry/InventoryItemEntry'
import url from '../../config'


function Inventory() {
  const [items, setItems] = useContext(Item)
  const [modal, setModal] = useContext(ModalShow)
  const [inventory, setInventory] = useContext(InventoryItems)
  const [search, setSearch] = useState('')

  const handleSearch = async (e) => {
    if(!search)
    return

    try {
      const temp = await fetch(`${url}/api/inventory/book/${search}/search`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const response = await temp.json()
      setInventory(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="inventoryContainer">
        <div className="inventoryHeader">
          <div className="inventoryHeaderLeft">
            <input
              type="text"
              name="search"
              className="inventorySearchBox"
              placeholder="Enter the title"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search
              className="inventorySearchIcon"
              onClick={handleSearch}
            ></Search>
          </div>
          <div className="inventoryHeaderRight">
            <button
              className="inventoryAddButton"
              onClick={() => {
                setItems({})
                setModal(true)
              }}
            >
              <AddCircleOutline className="inventoryAddIcon"></AddCircleOutline>{' '}
              Add
            </button>
          </div>
        </div>
        <div className="inventoryBody">
        
          {inventory.map((item, index) => {
            return (
              <InventoryItemEntry key={index} item={item}></InventoryItemEntry>
            )
          })}
        </div>
        {modal && <InventoryModal></InventoryModal>}
      </div>
    </>
  )
}

export default Inventory
