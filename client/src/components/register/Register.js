import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './register.css'
import { Link,useNavigate } from 'react-router-dom'
import SideModal from '../sideModal/SideModal'
import { registerVariants } from '../../animationVariants/variants'
import url from '../../config'
 

function Register() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    name: '',
    address: '',
    showPassword: false,
  })
  const navigation = useNavigate()
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const ModalShow = () => {
    setTimeout(() => {
      setMessage('')
    }, 1500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user.username) {
      setMessage('Username is required')
      document.querySelector("input[name='username']").focus()
      ModalShow()
      return
    }
    if (!user.email) {
      setMessage('Email is required')
      document.querySelector("input[name='email']").focus()
      ModalShow()
      return
    }
    if (!user.name) {
      setMessage('Name is required')
      document.querySelector("input[name='name']").focus()
      ModalShow()
      return
    }
    if (!user.password) {
      setMessage('Password is required')
      document.querySelector("input[name='password']").focus()
      ModalShow()
      return
    }
    if (!user.confirmPassword) {
      setMessage('Confirm password is required')
      document.querySelector("input[name='confirmPassword']").focus()
      ModalShow()
      return
    }
    if (user.password !== user.confirmPassword) {
      setMessage('Passwords do not match')
    }
    if (!user.address) {
      setMessage('Address is required')
      document.querySelector("input[name='address']").focus()
      ModalShow()
      return
    }
    const response = await fetch(`${url}/api/user/customer/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    alert(data.message)
    if(data.success)
    navigation('/signin')
  }

  return (
    <div className="registerContainer">
      <motion.div
        initial="initial"
        variants={registerVariants}
        animate="in"
        transition={{
          duration: 0.3,
        }}
        exit="out"
      >
        {message && <SideModal message={message} />}
        <form className="registerForm">
          <div className="registerFormTitle">Sign up</div>
          <div className="registerFormInputs">
            <input
              type="text"
              className="registerFormInput"
              name="username"
              value={user.username}
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="email"
              className="registerFormInput"
              value={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              className="registerFormInput"
              value={user.name}
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type={user.showPassword ? 'text' : 'password'}
              className="registerFormInput"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <input
              type={user.showPassword ? 'text' : 'password'}
              className="registerFormInput"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <span style={{ marginRight: '165px' }}>
              <input
                type="checkbox"
                id="showPassword"
                onClick={() =>
                  setUser({ ...user, showPassword: !user.showPassword })
                }
              />
              <label
                htmlFor="showPassword"
                style={{
                  userSelect: 'none',
                  marginLeft: '7px',
                  cursor: 'pointer',
                }}
              >
                Show Password
              </label>
            </span>
            <textarea
              name="address"
              value={user.address}
              cols="30"
              rows="10"
              onChange={handleChange}
              placeholder="Address"
              className="registerFormTextArea"
            ></textarea>
            <button className="registerButton" onClick={handleSubmit}>
              Sign up
            </button>
          </div>
          <div className="registerFormFooter">
            <span>
              Already have an account?{' '}
              <Link
                to="/signin"
                style={{
                  textDecoration: 'none',
                  color: '#007bff',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                }}
              >
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Register
