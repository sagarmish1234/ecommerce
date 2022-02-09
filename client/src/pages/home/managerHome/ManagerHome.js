import './managerHome.css'
import ManagerNavbar from '../../../components/navbar/managerNavbar/ManagerNavbar'
import Inventory from '../../../components/inventory/Inventory'
import Order from '../../../components/orders/Orders'
import { Routes, Route } from 'react-router-dom'
function ManagerHome() {

  return (
    <>
      <div className="managerHomeContainer">
        <div className="managerHomeLeft">
          <ManagerNavbar></ManagerNavbar>
        </div>
        <div className="managerHomeRight">
          <Routes>
            <Route path="/inventory" element={<Inventory></Inventory>}></Route>
            <Route path="/orders" element={<Order></Order>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default ManagerHome
