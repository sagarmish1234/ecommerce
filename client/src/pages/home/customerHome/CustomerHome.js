import React from 'react'
import './customerHome.css'
import CustomerNavbar from '../../../components/navbar/customerNavbar/CustomerNavbar'
import Login from '../../../components/login/Login'
import Cart from '../../../components/cart/Cart'
import DisplayItems from '../../../components/displayItems/DisplayItems'
import ProtectedRoute from '../../../components/protectedRoute/ProtectedRoute'
import CustomerOrders from '../../../components/customerOrders/CustomerOrders'
import { Routes, Route } from 'react-router-dom'

function CustomerHome() {
  return (
    <>
      <CustomerNavbar></CustomerNavbar>
      <Routes>
        <Route path="/" element={<DisplayItems></DisplayItems>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/" element={<ProtectedRoute></ProtectedRoute>}>
          <Route
           exact path="/orders"
            element={<CustomerOrders></CustomerOrders>}
          ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default CustomerHome
