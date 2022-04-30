import {useState} from 'react'
import './GalleryItem.css'


function GalleryItem({gallery}) {
const [imageForward,setImageForward]= useState(true)
const [likesNumber,setLikesNumber]=useState(0)

 const addLike =()=>{
      setLikesNumber(likesNumber + 1)
    

  }
const toggleImage = () => {
    setImageForward(!imageForward)
  }

  const renderImage = ()=>{
      if(toggleImage){
        return <img src={gallery.path}></img>
      }else{
          return <p>{gallery.description}</p>
      }
  }

 
    return (
    <div>
         <li onClick={toggleImage}>{renderImage()}
        <p>{gallery.description}</p> 
        </li>
        <p>{likesNumber}</p>
        <button onClick={addLike}>LIKE</button> 
    </div>
   
    
    )
  }
  
  export default GalleryItem;