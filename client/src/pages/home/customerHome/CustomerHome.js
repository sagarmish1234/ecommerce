import React from 'react'
import './customerHome.css'
import CustomerNavbar from '../../../components/navbar/customerNavbar/CustomerNavbar'
import Login from '../../../components/login/Login'
import Cart from '../../../components/cart/Cart'
import DisplayItems from '../../../components/displayItems/DisplayItems'
import ProtectedRoute from '../../../components/protectedRoute/ProtectedRoute'
import CustomerOrders from '../../../components/customerOrders/CustomerOrders'
import { Routes, Route, useLocation } from 'react-router-dom'
import Register from '../../../components/register/Register'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

function CustomerHome() {
  const location = useLocation()
  return (
    <>
      <CustomerNavbar></CustomerNavbar>
      <AnimatePresence exitBeforeEnter={true}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<DisplayItems></DisplayItems>}></Route>
          <Route path="/signin" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/" element={<ProtectedRoute></ProtectedRoute>}>
            <Route
              exact
              path="/orders"
              element={<CustomerOrders></CustomerOrders>}
            ></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default CustomerHome
