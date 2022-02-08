import React from 'react'
import ManagerHome from './managerHome/ManagerHome'
import CustomerHome from './customerHome/CustomerHome'

function Home() {
  if (localStorage.user && JSON.parse(localStorage.user).isManager) {
    return <ManagerHome></ManagerHome>
  }
  return <CustomerHome></CustomerHome>
}

export default Home
