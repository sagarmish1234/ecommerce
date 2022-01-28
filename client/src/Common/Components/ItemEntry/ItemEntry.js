import React from 'react'
import './itemEntry.css'

function ItemEntry(props) {
  const { title, author, price, stock } = props.item

  return (
    <>
      <div className='itemContainer'>
        <span className="itemTitle">{title}</span>
        <span className="itemAuthor">{author}</span>
        <span className="itemPrice">&#8377;{price}</span>
        <span className="itemStock">{stock}</span>
      </div>
    </>
  )
}

export default ItemEntry
