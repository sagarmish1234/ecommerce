import React, { useContext } from 'react'
import {InventoryItems} from '../../App' 
import ItemCard from '../itemCard/ItemCard'
import "./displayItems.css"

function DisplayItems() {
  const [inventory,setInventory] = useContext(InventoryItems)

  return (
    <div className='displayItemsContainer'> 
      {
        inventory.map((item,index) => {
          return (
              <ItemCard key={index} item={item}></ItemCard>
          )
        })
      }
    </div>
  )
}

export default DisplayItems