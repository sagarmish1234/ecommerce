import React, { useContext, useState } from 'react'
import './login.css'
import { UserDetails } from '../../../App'
import url from '../../CustomerConfig'
import { useNavigate, Link } from 'react-router-dom'
import { Message } from '../../../App'
function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    showPassword: false,
  })
  const navigate = useNavigate()
  const [message, setMessage] = useContext(Message)
  const [userDetails, SetUserDetails] = useContext(UserDetails)
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      setMessage('Empty Field')
      console(message)
      return
    }
    try {
      const temp = await fetch(`${url}/api/user/customerLogin`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(user),
      })
      const response = await temp.json()
      if (response.success) {
        console.log()
        alert(response.message)
        SetUserDetails({
          ...userDetails,
          token: response.token,
          isManager: response.isManager,
          username: response.username
        })
        localStorage.userDetails = JSON.stringify(response);
        navigate('/inventory')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <input
          type="email"
          className="loginInput"
          placeholder="Enter the Email"
          name="email"
          value={user.email}
          // autoComplete="off"
          onChange={handleChange}
        />
        <input
          type={user.showPassword ? 'text' : 'password'}
          className="loginInput"
          name="password"
          placeholder="Enter the Password"
          value={user.password}
          onChange={handleChange}
        />
        <span className="showPassword">
          <input
            type="checkbox"
            name="showPassword"
            id="showPassword"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: !user.showPassword })
            }}
          />
          &nbsp;Show Password
        </span>
        <button type="submit" onClick={handleSubmit} className="loginButton">
          Sign In
        </button>
        <span style={{ marginTop: '30px', fontSize: '1.2rem' }}>
          Don't have an account{' '}
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
