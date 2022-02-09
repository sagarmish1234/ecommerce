import React,{useContext} from 'react'
import ManagerHome from './managerHome/ManagerHome'
import CustomerHome from './customerHome/CustomerHome'
import { User } from '../../App'

function Home() {
  const [user, setUser] = useContext(User)

  if ((localStorage.user && JSON.parse(localStorage.user).isManager) || user) {
    return <ManagerHome></ManagerHome>
  }
  return <CustomerHome></CustomerHome>
}

export default Home
