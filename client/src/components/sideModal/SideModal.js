import React, { useEffect } from 'react'
import './sideModal.css'



function SideModal(props) {
  const message = props.message
 
  return (
    <div className="sideModalContainer">
      <div className="sideModal">{message}</div>
    </div>
  )
}

export default SideModal
