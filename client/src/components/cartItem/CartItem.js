import React, { useContext } from 'react'
import './cartItem.css'
import { CartItems } from '../../App'

function CartItem(props) {
  const { item } = props
  const [cart, setCart] = useContext(CartItems)

  const handleRemove = (e) => {
    e.preventDefault()
    setCart(cart.filter((cartItem) => cartItem._id !== item._id))
    localStorage.cart = JSON.stringify(
      cart.filter((cartItem) => cartItem.id !== item.id),
    )
  }

  return (
    <div className="cartItem">
      <img src={item.image} alt="img" className="cartItemImage" />
      <h1 className="cartItemTitle">{item.title}</h1>
      <h1 className="cartItemQuantity">{item.quantity}</h1>
      <button className="cartItemRemove" onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default CartItem
