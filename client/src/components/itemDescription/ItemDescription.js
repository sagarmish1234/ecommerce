import './itemDescription.css'
import { Close } from '@mui/icons-material'
import { useContext} from 'react'
import { ShowDescription } from '../inventoryItemEntry/InventoryItemEntry'


function ItemDescription(props) {
    const [showDescription, setShowDescription] = useContext(ShowDescription)


  return (
    <div className="itemDescriptionBackground">
      <Close className="itemDesriptionCloseButton" onClick={()=>setShowDescription(false)}></Close>
      <div className="itemDescriptionContainer">
        <div className="itemDescriptionTitle">{props.item.title}</div>
        <div className="itemDescriptionAuthor">{props.item.author}</div>
        <div className="itemDescriptionContent">{props.item.description}</div>
      </div>
      <img src={props.item.image} alt="img" className='inventoryModalImagePreview' style={{top:"100px"}}/>
    </div>
  )
}

export default ItemDescription
