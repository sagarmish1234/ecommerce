import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { UserDetails } from '../App'
function DefaultVeiw() {
  const [userDetails, setUserDetails] = useContext(UserDetails)
  const Visited = () => {
    if(localStorage.userDetails){
    setUserDetails({...JSON.parse(localStorage.userDetails)})
    console.log('Local Storage is there')
    }
  }
  useEffect(() => {
    // return () => {
      Visited()
    // }
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default DefaultVeiw
