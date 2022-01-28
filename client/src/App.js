import React, { useState } from 'react'
import './App.css'
import DefaultView from './Common/DefaultVeiw'
export const Message = React.createContext()
export const UserDetails = React.createContext({})
function App() {
  const [userDetails, setUserDetails] = useState({})
  const [message, setMessage] = useState('')
  
  return (
    <>
      <UserDetails.Provider value={[userDetails, setUserDetails]}>
        <Message.Provider value={[message, setMessage]}>
          <DefaultView></DefaultView>
        </Message.Provider>
      </UserDetails.Provider>
    </>
  )
}

export default App
