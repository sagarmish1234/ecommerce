import React, { useContext } from 'react'
import ManagerHome from './managerHome/ManagerHome'
import CustomerHome from './customerHome/CustomerHome'
import { User } from '../../App'
import { Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function Home() {
  const [user, setUser] = useContext(User)

  return (
    <>
      <AnimatePresence>
        {user && user.isManager ? (
          <ManagerHome key={"managerHome"}></ManagerHome>
        ) : (
          <CustomerHome key={"customerHome"}></CustomerHome>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home
