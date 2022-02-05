import React, { useContext, useEffect, useState } from 'react'
import './homePageItem.css'
import { Cart } from '../../../App'
function HomePageItem(props) {
  const [cart, setCart] = useContext(Cart)
  const [myCart, setMyCart] = useState([])
  const { image, title, author, price } = props.item
  const CartAddition = () => {
    setCart([...cart, props.item])
  }
  
  return (
    <>
      <div className="homePageItemContainer">
        <img src={image} alt="img" className="homePageItemImage" />
        <div className="homePageItemInfo">
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1 className="homePageItemTitle">{title}</h1>
            <h1 className="homePageItemAuthor">By {author}</h1>
            <span className='homePageItemPrice' >
              &#8377;{price}
            </span>
          </span>
          {<button className="addToCart" onClick={CartAddition}>
            Add to Cart
          </button>}
        </div>
      </div>
    </>
  )
}

export default HomePageItem
