import React, { useEffect } from 'react'
import './sideModal.css'
import { motion } from 'framer-motion'

function SideModal(props) {
  const message = props.message

  return (
    <motion.div
      initial={{
        x: '450px',
        opacity: 0
      }}
      animate={{
        x: ['-45vw', '100vw'],
        opacity: [1,1,0]
      }}
      transition={{
        duration: 2.2,
        delay: 0,
      }}
      className="sideModalContainer"
    >
      <div className="sideModal">{message}</div>
    </motion.div>
  )
}

export default SideModal
