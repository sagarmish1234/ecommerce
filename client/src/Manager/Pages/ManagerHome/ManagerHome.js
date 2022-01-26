import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ManagerNavbar from '../../Components/ManagerNavbar/ManagerNavbar'
function ManagerHome() {
  const location = useLocation()

  return (
    <>
      <ManagerNavbar></ManagerNavbar>
    </>
  )
}

export default ManagerHome
