import React, { useContext, useEffect } from 'react'
import logo from '../../../assets/logo.png'
import './customerNavbar.css'
import {
  Search,
  Login,
  ShoppingCart,
  Logout,
  Person,
} from '@mui/icons-material'
import { InventoryItems, CartItems, User } from '../../../App'
import { Link } from 'react-router-dom'

function CustomerNavbar() {
  const [inventory, setInvetory] = useContext(InventoryItems)
  const [cart, setCart] = useContext(CartItems)
  const [user, setUser] = useContext(User)

  return (
    <div className="customerNavbarContainer">
      <Link
        to={'/'}
        style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}
      >
        <div className="customerNavbarBrand">
          <img src={logo} alt="brand" className="customerNavbarBrandImage" />
          <h1 className="customerNavbarBrandTitle">ShopKart</h1>
        </div>
      </Link>
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
          <Link
            to={'/signin'}
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <li
              className="customerNavbarLink"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Login></Login>&nbsp;Sign in
            </li>
          </Link>
        )}
        {!user && (
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'white', height: '100%' }}
          >
            <li className="customerNavbarLink">Register</li>
          </Link>
        )}
        {user && (
          <>
            <li className="customerNavbarLink">
              <Person></Person>
              {user.username}
            </li>
            <Link
              to="/orders"
              style={{ textDecoration: 'none', color: 'white', height: '100%' }}
            >
              <li className="customerNavbarLink">
                Orders
                {user.orders}
              </li>
            </Link>
          </>
        )}

        <Link
          to="/cart"
          style={{ textDecoration: 'none', color: 'white', height: '100%' }}
        >
          <li className="customerNavbarLink">
            <span className="cart">
              <span>{cart.length}</span>
              <ShoppingCart className="customerNavbarCartIcon"></ShoppingCart>
            </span>
            Cart
          </li>
        </Link>
        {user && (
          <li
            className="customerNavbarLink"
            onClick={() => {
              setUser(null)
              localStorage.removeItem('user')
            }}
          >
            Logout &nbsp;<Logout></Logout>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CustomerNavbar
