import React, { useContext } from 'react'
import './customerHome.css'
import { InventoryItems, Cart } from '../../../../App'
import HomePageItem from '../../../Components/homePageItem/HomePageItem'
function CustomerHome() {
  const [inventoryItems, setInventoryItems] = useContext(InventoryItems)
  const [cart, setCart] = useContext(Cart)
  return (
    <div>
      <div className="customerHomeContainer">
        <div className="displayItems">
          {inventoryItems.map((item) => {
            return (
              // <span key={item._id}>
                <HomePageItem item={item}></HomePageItem>
              // </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CustomerHome
