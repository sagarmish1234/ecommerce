import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
  const isAuthenticated = localStorage.user
  console.log('this', isAuthenticated)
  return isAuthenticated ? <Outlet></Outlet> : <Navigate to="/signin" />
}

export default ProtectedRoute
