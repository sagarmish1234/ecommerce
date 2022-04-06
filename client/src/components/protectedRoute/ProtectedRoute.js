import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function ProtectedRoute() {
  const isAuthenticated = localStorage.user
  const location = useLocation()
  // console.log('this', isAuthenticated)
  return isAuthenticated ? (
    <Outlet></Outlet>
  ) : (
    <Navigate
      to="/signin"
      state={{
        prev: location.state && location.state.prev ? location.state.prev : '/',
      }}
    />
  )
}

export default ProtectedRoute
