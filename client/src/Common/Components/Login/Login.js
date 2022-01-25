import React, { useState } from 'react'
import './login.css'
function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <input
          type="email"
          className="loginInput"
          placeholder="Enter the Email"
          name="email"
          value={user.email}
        />
        <input
          type="password"
          className="loginInput"
          name="password"
          placeholder="Enter the Password"
          value={user.password}
        />
        <span>
          <input type="checkbox" name="" id="" />
        </span>
      </form>
    </div>
  )
}

export default Login
