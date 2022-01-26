import React, { useContext, useState } from 'react'
import './login.css'
import {UserDetails} from "../../../App"
import url from "../../CustomerConfig"
import {useNavigate} from "react-router-dom"
function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [userDetails, SetUserDetails]  = useContext(UserDetails);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!user.email || !user.password){
      setMessage("Empty Field");
      console(message)
      return;
    }
    try{

      const temp = await fetch(`${url}/api/user/customerLogin`, {
        method: 'POST',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(user)
      })
      const response = await temp.json()
      // console.log(response)
      if(response.success){
        console.log()
        alert(response.message)
        SetUserDetails({...userDetails,token:response.token,isManager:response.isManager})
        if(response.isManager)
        navigate("/manager")
      }
    }
    catch(err){
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
          onChange={handleChange}
        />
        <input
          type="password"
          className="loginInput"
          name="password"
          placeholder="Enter the Password"
          value={user.password}
          onChange={handleChange}
        />
        <span>
          <input type="checkbox" name="showPassword" id="showPassword" />
        </span>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
