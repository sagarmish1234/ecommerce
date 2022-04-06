import React, { useContext, useState, useEffect } from 'react'
import './checkOut.css'
import { CartItems, InventoryItems } from '../../App'

function CheckOut() {
  const [cart, setCart] = useContext(CartItems)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const First = () => {
      let temp = 0
      cart.forEach((item) => {
        temp += item.price * item.quantity
      })
      setTotal(temp)
    }
    return First()
  }, [cart])
  return (
    <div className="checkOutContainer">
      <div className="checkOutItemContainer">
        {cart.map((item, index) => {
          return (
            <div className="checkOutItem" key={item._id}>
              <div className="checkOutItemTitle">{item.title}</div>
              <div className="checkOutItemPrice">${item.price}</div>
              <div className="checkOutItemQuantity">{item.quantity}</div>
              <div className="checkOutItemTotalPrice">
                ${item.price * item.quantity}
              </div>
            </div>
          )
        })}
      </div>
      <div className="checkOutTotalContainer">
        <span className="cartTotalHeading">Cart Total</span>
        <span className="cartTotal">{total}</span>
        <button className="orderButton">Place Order</button>
      </div>
    </div>
  )
}

export default CheckOut
