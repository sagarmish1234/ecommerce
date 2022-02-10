import './itemDescription.css'
import { Close } from '@mui/icons-material'
import { useContext } from 'react'
import { ShowDescription } from '../inventoryItemEntry/InventoryItemEntry'
import { AnimatePresence, motion } from 'framer-motion'
import {useLocation} from "react-router-dom"

function ItemDescription(props) {
  const [showDescription, setShowDescription] = useContext(ShowDescription)
  const location = useLocation()
  return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity:0
        }}
        key={props.item._id}
        location = {location}
        transition={{
          duration: .3,
        }}
        className="itemDescriptionBackground"
      >
        <Close
          className="itemDesriptionCloseButton"
          onClick={() => setShowDescription(false)}
        ></Close>
        <div className="itemDescriptionContainer">
          <div className="itemDescriptionTitle">{props.item.title}</div>
          <div className="itemDescriptionAuthor">{props.item.author}</div>
          <div className="itemDescriptionContent">{props.item.description}</div>
        </div>
        <img
          src={props.item.image}
          alt="img"
          className="inventoryModalImagePreview"
          style={{ top: '100px' }}
        />
      </motion.div>
  )
}

export default ItemDescription
