import React, { useContext, useEffect } from 'react'
import './customerNavbar.css'
import {
  Search,
  Login,
  ShoppingCart,
  Logout,
  Person,
} from '@mui/icons-material'
import { InventoryItems, Cart, User } from '../../../App'

function CustomerNavbar() {
  const [inventory, setInvetory] = useContext(InventoryItems)
  const [cart, setCart] = useContext(Cart)
  const [user, setUser] = useContext(User)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="customerNavbarContainer">
      <div className="customerNavbarBrand">
        <img
          src="./logo.png"
          alt="brand"
          className="customerNavbarBrandImage"
        />
        <h1 className="customerNavbarBrandTitle">ShopKart</h1>
      </div>
      <div className="customerNavbarSearch">
        <input
          type="text"
          className="customerNavbarSearchBox"
          placeholder="Enter the Book title"
        />
        <Search className="customerNavbarSearchIcon"></Search>
      </div>
      <ul className="customerNavbarLinks">
        {!user && (
          <li
            className="customerNavbarLink"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Login></Login>Login
          </li>
        )}
        {!user && <li className="customerNavbarLink">Register</li>}
        <li className="customerNavbarLink">
          <span className='cart'>
          <span>{cart.length}</span>
          <ShoppingCart className="customerNavbarCartIcon"></ShoppingCart>
          </span>
          Cart
        </li>
        {user && (
          <li className="customerNavbarLink">
            Logout<Logout></Logout>
          </li>
        )}
        {user && (
          <li className="customerNavbarLink">
            <Person></Person>
            {user.username}
          </li>
        )}
      </ul>
    </div>
  )
}

export default CustomerNavbar
