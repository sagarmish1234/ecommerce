import React, { useContext, useState } from 'react'
import './login.css'
import { User } from '../../App'
import { Link } from 'react-router-dom'
import SideModal from '../sideModal/SideModal'
import url from '../../config'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Login() {
  const [user, setUser] = useContext(User)
  const [message, setMessage] = useState('Test message')
  const navigate = useNavigate()
  const [person, setPerson] = useState({
    username: '',
    password: '',
    showPassword: false,
  })

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vh",
      scale: 1.2
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vh",
      scale: 1.2
    }
  };

  const ModalShow = () => {
    document.querySelector('.sideModalContainer').classList.add('show')
    setTimeout(() => {
      document.querySelector('.sideModalContainer').classList.remove('show')
    }, 1000)
    setTimeout(() => {
      setMessage('')
    }, 1500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!person.username) {
      setMessage('Please fill in your username')
      ModalShow()
      document.querySelector('#username').focus()
      return
    }
    if (!person.password) {
      setMessage('Please fill in your password')
      ModalShow()
      document.getElementById('password').focus()
      return
    }

    const temp = await fetch(`${url}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })
    const response = await temp.json()
    alert(response.message)
    if (response.success) {
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      if (response.isManager) {
        console.log('manager')
        navigate('/inventory')
      }
    }
  }

  return (
    <div className="loginContainer">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{
          duration:.5
        }}
      >
        {<SideModal message={message}></SideModal>}
        <form className="loginForm">
          <div className="loginFormHeader">
            <h1 className="loginFormHeaderTitle">Sign in</h1>
          </div>

          <div className="loginFormInputs">
            <input
              type="text"
              name="username"
              id="username"
              value={person.username}
              className="loginFormInput"
              placeholder="Username"
              onChange={(e) =>
                setPerson({ ...person, username: e.target.value })
              }
            />
            <input
              type={person.showPassword ? 'text' : 'password'}
              value={person.password}
              name="password"
              id="password"
              className="loginFormInput"
              placeholder="Password"
              onChange={(e) =>
                setPerson({ ...person, password: e.target.value })
              }
            />
            <div>
              <input
                type="checkbox"
                id="showPassword"
                className="loginFormShowPassword"
                value={person.showPassword}
                onChange={(e) =>
                  setPerson({ ...person, showPassword: !person.showPassword })
                }
              />
              <label htmlFor="showPassword" style={{ userSelect: 'none' }}>
                Show Password
              </label>
            </div>
            <button className="loginFormLoginButton" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
          <div className="loginFormFooter">
            <p className="loginFormFooterText">
              Don't have an account?{' '}
              <Link
                to="/register"
                style={{
                  textDecoration: 'none',
                  color: '#007bff',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                }}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Login
