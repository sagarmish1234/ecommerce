import React, { useContext } from 'react'
import ManagerHome from './managerHome/ManagerHome'
import CustomerHome from './customerHome/CustomerHome'
import { User } from '../../App'
import { Navigate } from 'react-router-dom'
function Home() {
  const [user, setUser] = useContext(User)

  if (user && user.isManager) {
    return (
      <>
        <ManagerHome></ManagerHome>
      </>
    )
  }
  return <CustomerHome></CustomerHome>
}

export default Home
