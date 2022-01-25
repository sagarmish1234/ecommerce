import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Login from '../../Components/Login/Login'
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" component={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default Home
