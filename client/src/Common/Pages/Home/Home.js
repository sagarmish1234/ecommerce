import React from 'react'
import './home.css'
import Login from '../../Components/Login/Login'
import CustomerHome from '../../../Customer/Pages/CustomerHome/CustomerHome'
import ManagerHome from "../../../Manager/Pages/ManagerHome/ManagerHome"
function Home() {
  if(localStorage.isManager)
    return (
      <div>
        {localStorage.isManager.match("Yes")?<ManagerHome></ManagerHome>:<CustomerHome></CustomerHome>}
      </div>
    )
    else
    return <CustomerHome></CustomerHome>
}

export default Home
