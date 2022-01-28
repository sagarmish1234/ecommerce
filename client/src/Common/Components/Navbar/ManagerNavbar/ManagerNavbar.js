import React, { useContext, useEffect } from 'react'
import './managerNavbar.css'
import { Logout } from '@mui/icons-material'
import { UserDetails } from '../../../../App'
function ManagerNavbar() {
  const [userDetails, setUserDetails] = useContext(UserDetails)

  useEffect(() => {
    const Select = () => {
      document.querySelectorAll('.managerNavbarLink').forEach((link)=>{
        link.addEventListener("click",()=>{
          document.querySelector(".managerNavbarLink.active").classList.toggle("active")
          link.classList.toggle("active");
        })
      })
      
    }
    Select()
    // return () => {
    // }
  }, [])

  return (
    <>
      <div className="managerNavbarContainer">
        <div className="managerNavbarBrand">
          <img
            src="/images/brandImage.png"
            alt="img"
            className="managerNavbarBrandImg"
          />
          <h1 className="managerNavbarBrandTitle">ShopCart</h1>
        </div>
        <ul className="managerNavbarLinks">
          <li className="managerNavbarLink active">Inventory</li>
          <li className="managerNavbarLink">Orders</li>
          <li className="managerNavbarLink">
            {userDetails.username ||
              JSON.parse(localStorage.userDetails).username}
          </li>
          {(userDetails.token || localStorage.userDetails) && (
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

export default ManagerNavbar
