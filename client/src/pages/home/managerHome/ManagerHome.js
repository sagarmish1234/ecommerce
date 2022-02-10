import './managerHome.css'
import ManagerNavbar from '../../../components/navbar/managerNavbar/ManagerNavbar'
import Inventory from '../../../components/inventory/Inventory'
import Order from '../../../components/orders/Orders'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function ManagerHome() {
  const location = useLocation();
  return (
      <motion.div
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
        }}
        key={"managerHome"}
        location={location}
        transition={{
          duration: 0.7,
          delay: 0,
        }}
        exit={{
          x: '-100vw',
        }}
        className="managerHomeContainer"
      >
        <div className="managerHomeLeft">
          <ManagerNavbar></ManagerNavbar>
        </div>
        <div className="managerHomeRight">
          <Routes>
            <Route path="/inventory" element={<Inventory></Inventory>}></Route>
            <Route path="/orders" element={<Order></Order>}></Route>
          </Routes>
        </div>
      </motion.div>
  )
}

export default ManagerHome
