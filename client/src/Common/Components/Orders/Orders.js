import React from 'react'
import './order.css'
import { Search } from '@mui/icons-material'
function Orders() {
  return (
    <>
      <div className="orderContainer">
        <div className="orderContent">
          <div className="orderSearch">
            <input
              type="text"
              name="search"
              id="search"
              className="orderSearchBox"
            />
            <Search className="orderSearchButton"> </Search>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
