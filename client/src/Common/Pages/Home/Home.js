import React,{useContext} from 'react'
import ManagerHome from './ManagerHome/ManagerHome'
import CustomerHome from './CustomerHome/CustomerHome'
import { UserDetails } from "../../../App"

function Home() {
  const [userDetails, setUserDetails] = useContext(UserDetails)

  return (
    <>
      {userDetails.isManager ? (
        <ManagerHome></ManagerHome>
      ) : (
        <CustomerHome></CustomerHome>
      )}
    </>
  )
}

export default Home
