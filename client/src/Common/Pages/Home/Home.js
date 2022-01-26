import React, { useContext } from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from '../../Components/Login/Login'
import { UserDetails } from '../../../App'
import ManagerHome from '../../../Manager/Pages/ManagerHome/ManagerHome'
function Home() {
  const [userDetails, SetUserDetails] = useContext(UserDetails)
  if (userDetails.isManager) {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/manager" element={<ManagerHome></ManagerHome>}></Route>
        </Routes>
      </>
    )
  } else
    return (
      <div>
        {<Navbar></Navbar>}
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    )
}

export default Home
