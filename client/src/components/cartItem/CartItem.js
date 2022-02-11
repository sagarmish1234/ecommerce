import React from 'react'
import "./cartItem.css"

function CartItem(props) {
    const {item} = props;
    return (
        <div className='cartItem'>
          <img src={item.image} alt="img" className="cartItemImage" />
          <h1 className='cartItemTitle'>{item.title}</h1>
          <h1 className='cartItemAuthor'>by {item.author}</h1>
          <p className='cartItemDescription'>{item.description}</p>
          <h1 className='cartItemQuantity'>Quantity: {item.quantity}</h1>
        </div>
      )
}

export default CartItem