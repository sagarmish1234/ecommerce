import React, { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './itemCardDescription.css'
import { useContext } from 'react'
import { InventoryItems,CartItems } from '../../App'

function ItemCardDescription() {
  const [inventory, setInventory] = useContext(InventoryItems)
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState({})
  const [cart, setCart] = useContext(CartItems)
  const { id } = useParams()
  const navigation = useNavigate()
  
  const handleCart = () => {
        if(cart.find(item => item._id === id)){
            const itemIndex = cart.findIndex(item => item._id === id)
            const newCart = [...cart]
            newCart[itemIndex].quantity += quantity
            setCart(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))
        }
        else{
            setCart([...cart, { ...item, quantity }])
            localStorage.setItem('cart', JSON.stringify([...cart, { ...item, quantity }]))
        }
        navigation('/cart')
}

  
  useEffect(() => {
    setItem(JSON.parse(localStorage.inventory).find((item) => item._id === id))
  }, [])

  return (
    <div className="itemCardDescriptionContainer">
      <div className="itemCardDescriptionLeft">
        <img src={item.image} alt="img" className="itemCardDescriptionImage" />
      </div>
      <div className="itemCardDescriptionCenter">
        <h1 className="itemCardDescriptionTitle">{item.title}</h1>
        <h1 className="itemCardDescriptionAuthor">by {item.author}</h1>
        <p className="itemCardDescriptionContent">{item.description}</p>
      </div>
      <div className="itemCardDescriptionRight">
          <h1>Quantity</h1>
        <div className="itemCardDescriptionQuantity">
          <button
            className="itemCardDescriptionMinus"
            onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 0)}
          >
            -
          </button>
          <input
            type="text"
            className="itemCardDescriptionInput"
            value={quantity}
            disabled
          />
          <button
            className="itemCardDescriptionPlus"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button className="itemDescriptionAddToCart"

        onClick={handleCart}
        
        
        >Add to cart</button>
      </div>
    </div>
  )
}

export default ItemCardDescription
