import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Login from '../../../Common/Components/Login/Login'
import { Switch, Route } from 'react-router-dom'
function CustomerHome() {
  return (
    <>
      <Switch>
        <Route path="/customer" component={<Navbar></Navbar>}></Route>
        <Route path="/customer/login" component={<Login></Login>}>
        </Route>
      </Switch>
    </>
  )
}
export default CustomerHome
