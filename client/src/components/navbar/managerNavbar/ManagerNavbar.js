import React from 'react'
import './managerNavbar.css'
import { Logout } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

function ManagerNavbar() {
  return (
    <>
      <div className="managerNavbarContainer">
        <div className="managerNavbarBrand">
          <img src="./logo.png" alt="" className="managerNavbarBrandImg" />
          <span className="managerNavbarBrandTitle">ShopKart</span>
        </div>
        <ul className="managerNavbarLinks">
          <NavLink to={'/inventory'} style={{ textDecoration: 'none' }}>
            <li className="managerNavbarLink">Inventory</li>
          </NavLink>
          <NavLink to={'/orders'} style={{ textDecoration: 'none' }}>
            <li className="managerNavbarLink">Order</li>
          </NavLink>
          <li
            className="managerNavbarLink"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Logout style={{ marginRight: '2px' }}></Logout>Logout
          </li>
        </ul>
      </div>
    </>
  )
}

export default ManagerNavbar
