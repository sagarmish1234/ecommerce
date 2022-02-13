import React, { useContext, useEffect, useState } from 'react'
import url from '../../config'
import { InventoryItems } from '../../App'
import ItemCard from '../itemCard/ItemCard'
import './displayItems.css'
import LoadingSpin from 'react-loading-spin'

function DisplayItems() {
  const [inventory, setInventory] = useContext(InventoryItems)

  

  return (
    <>
      {!inventory && <LoadingSpin></LoadingSpin>}
      <div className="displayItemsContainer">
        {inventory.map((item, index) => {
          return <ItemCard key={index} item={item}></ItemCard>
        })}
      </div>
    </>
  )
}

export default DisplayItems
