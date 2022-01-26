import React, { useState, useEffect, useContext } from 'react'
import './customerNavbar.css'
import { Link } from 'react-router-dom'
import { UserDetails } from '../../../../App'
import { Search, ShoppingCart } from '@mui/icons-material'
import url from '../../../CustomerConfig'
function CustomerNavbar() {
  const [userDetails, setUserDetails] = useContext(UserDetails)
  const [search, setSearch] = useState('')
  useEffect(() => {
    async function FetchData() {
      try {
        const temp = await fetch(`${url}/api/inventory/bookGetAll`, {
          method: 'GET',
        })
        const response = await temp.json()
        setUserDetails({ ...userDetails, inventory: response.message })
        localStorage.inventory = JSON.stringify(response.message)
      } catch (err) {
        console.error(err)
      }
    }
    if (!localStorage.inventory) FetchData()
  }, [])

  const SearchInventory = async () => {
    const temp = await fetch(`${url}/api/inventory/${search}/search`, {
      method: 'GET',
    })
    const response = await temp.json()
    console.log(response)
  }

  return (
    <>
      <div className="navbarContainer">
        <div className="navbarBrand">
          <img
            src="/images/brandImage.png"
            alt="img"
            className="navbarBrandImg"
          />
          <h1 className="navbarBrandTitle">ShopCart</h1>
        </div>
        <div className="navbarSearch">
          <input
            type="text"
            className="searchInput"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <Search
            className="navbarSearchIcon"
            onClick={SearchInventory}
          ></Search>
        </div>
        <ul className="navbarLinks">
          <li className="navbarLink">Address</li>
          <li className="navbarLink">
            <Link to="/login">Sign in</Link>{' '}
          </li>{' '}
          <li className="navbarLink">
            Orders & <br />
            Return
          </li>
          <li className="navbarLink">
            <span className="navbarCart">
              <span className="cartQty">0</span>
              <ShoppingCart className="shoppingCartIcon"></ShoppingCart>
            </span>
            <span>Cart</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CustomerNavbar
