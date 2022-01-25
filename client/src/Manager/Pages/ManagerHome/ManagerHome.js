import React from 'react'
import ManagerNavbar from '../../Components/ManagerNavbar/ManagerNavbar'
import { Switch, Route } from 'react-router-dom'
function ManagerHome() {
  return (
    <div>
      <Switch>
        <Route path="manager" component={<ManagerNavbar></ManagerNavbar>}></Route>
      </Switch>
    </div>
  )
}

export default ManagerHome
