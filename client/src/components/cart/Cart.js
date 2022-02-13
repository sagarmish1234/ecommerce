import React, { useContext, useEffect } from 'react'
import './cart.css'
import { CartItems } from '../../App'
import CartItem from '../cartItem/CartItem'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

function Cart() {
  const [cart, setCart] = useContext(CartItems)
  const location = useLocation()
  return (
    <motion.div
      initial={{
        x: '-100vw',
      }}
      animate={{
        x: '0vw',
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        x: '-100vw',
      }}
      style={{
        display: 'flex',
      }}
    >
      <div className="cartItems">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item}></CartItem>
        })}
      </div>
      <div className="cartLeft">
        <Link
          to="/checkout"
          state={{ prev: location.pathname }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <button className="cartCheckOutButton">Check Out</button>
        </Link>
        
      </div>
    </motion.div>
  )
}

export default Cart
