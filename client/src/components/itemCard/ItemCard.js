import React from 'react'
import './itemCard.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ItemCard(props) {
  const { image, title, price, author } = props.item
  return (
    <div className="itemCardContainer">
      <img src={image} alt="img" className="itemCardImage" />
      <Link to={`/item/${props.item._id}`}
        state={
          {
            item: props.item
          }
        }
      
      >
        <motion.div
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className="itemCardInfo"
        >
          <h1 className="itemCardTitle">{title}</h1>
          <h1 className="itemCardAuthor">By {author}</h1>
          <h1 className="itemCardPrice">&#8377;{price}</h1>
        </motion.div>
      </Link>
    </div>
  )
}

export default ItemCard
