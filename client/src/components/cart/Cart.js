import React,{useContext} from 'react'
import "./cart.css"
import {CartItems} from "../../App"
import CartItem from '../cartItem/CartItem'

function Cart() {
  const [cart, setCart] = useContext(CartItems)
  return (
    <div className='cartItems'>
      {
        cart.map((item,index) => {
         return <CartItem key={index} item={item}></CartItem>
        })

      }
    </div>
  )
}

export default Cart