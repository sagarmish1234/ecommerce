import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"
import { Link } from 'react-router-dom'
import './login.css'
import url from '../../CustomerConfig'

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    showPassword:false
  })
  const navigation = useHistory()
  const [message, setMessage] = useState('Test Message')
  const [error, setError] = useState(false)
  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    const Modal = () => {
      document.querySelector('.sideModal').classList.toggle('active')
      setTimeout(() => {
        document.querySelector('.sideModal').classList.toggle('active')
      }, 2000)
    }

    return () => {
      Modal()
    }
  }, [error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      setMessage('Empty Field')
      setError(!error)
      return
    }
    try {
      const temp = await fetch(`${url}/api/user/userAuth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      const response = await temp.json()
      if (response.success) {
        localStorage.token = response.token
        localStorage.user = JSON.stringify(user)
        localStorage.isManager = response.isManager ? 'Yes' : 'No'
        console.log(response.isManager)
        alert(response.message)
        if(response.isManager)
        navigation("/manager/inventory")
        
      } else {
        setMessage(response.message)
        setError(!error)
        return
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="loginContainer">
      {message && <div className="sideModal">{message}</div>}
      <form className="loginForm">
        <input
          type="email"
          className="loginInput"
          placeholder="Enter the Email"
          name="email"
          onChange={handleInput}
          value={user.email}
        />
        <input
          type={user.showPassword?"text":"password"}
          className="loginInput"
          name="password"
          placeholder="Enter the Password"
          value={user.password}
          onChange={handleInput}
        />
        <span className="showPassword">
          <input type="checkbox" name="showPassword" id="showPassword" onChange={()=>{setUser({...user,showPassword:!(user.showPassword)})}}/>
          Show Password
        </span>
        <button type="submit" className="loginButton" onClick={handleSubmit}>
          Sign In
        </button>

        <span className="loginDontHaveAccount">
          Don't have and account &nbsp;
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            <span className="signupLink">Sign up</span>
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
