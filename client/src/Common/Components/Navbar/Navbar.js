import React, { useContext } from 'react'
import CustomerNavbar from './CustomerNavbar/CustomerNavbar'
import ManagerNavbar from './ManagerNavbar/ManagerNavbar'
import { UserDetails } from "../../../App"

function Navbar() {
  const [userDetails, setUserDetails] = useContext(UserDetails)

  return (
    <>
      {userDetails.isManager? (
        <ManagerNavbar></ManagerNavbar>
      ) : (
        <CustomerNavbar></CustomerNavbar>
      )}
    </>
  )
}

export default Navbar
