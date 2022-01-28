import React, { useState, useEffect, useContext } from 'react'
import './customerNavbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserDetails } from '../../../../App'
import {
  Search,
  ShoppingCart,
  Person,
  Logout,
  Login,
  Input,
  AddLocation,
} from '@mui/icons-material'
import url from '../../../CustomerConfig'

function CustomerNavbar() {
  const [userDetails, setUserDetails] = useContext(UserDetails)
  const [search, setSearch] = useState('')
  const naviagte = useNavigate()
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
  useEffect(() => {
    const Select = () => {
      document.querySelectorAll('.navbarLink').forEach((link) => {
        link.addEventListener('click', () => {
          document
            .querySelector('.navbarLink.selected')
            .classList.toggle('selected')
          link.classList.toggle('selected')
        })
      })
    }
    Select()
    // return () => {
    // }
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
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '20px',
          }}
        >
          <div className="navbarBrand">
            <img
              src="/images/brandImage.png"
              alt="img"
              className="navbarBrandImg"
            />
            <h1 className="navbarBrandTitle">ShopCart</h1>
          </div>
        </Link>
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
          <li className="navbarLink selected">
            <AddLocation></AddLocation>
            Address
          </li>
          {!userDetails.token ? (
            <>
              <Link
                to="/register"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <li className="navbarLink">
                  <Input></Input>
                  Register
                </li>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <li className="navbarLink">
                  <Login></Login>
                  Sign in
                </li>
              </Link>{' '}
            </>
          ) : (
            <li className="navbarLink">
              <Person></Person>
              {userDetails.username}
            </li>
          )}
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

          {userDetails.token && (
            <li
              style={{
                backgroundColor: 'transparent',
                height: '35px',
                width: 'auto',
                outline: 'none',
                padding: '10px',
                border: '2px solid white',
                color: 'white',
                margin: 'auto 0px',
                borderRadius: '7px',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '700',
                cursor: 'pointer',
              }}
              onClick={() => {
                localStorage.removeItem('userDetails')
                setUserDetails({})
                naviagte('/')
              }}
            >
              <Logout></Logout>
              Logout
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default CustomerNavbar
