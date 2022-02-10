import './managerHome.css'
import ManagerNavbar from '../../../components/navbar/managerNavbar/ManagerNavbar'
import Inventory from '../../../components/inventory/Inventory'
import Order from '../../../components/orders/Orders'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

function ManagerHome() {
  return (
    <>
      <motion.div
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0,
        }}
        exit={{
          opacity: 0,
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
    </>
  )
}

export default ManagerHome
