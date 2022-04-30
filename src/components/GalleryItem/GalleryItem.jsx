import {useState} from 'react'
import './GalleryItem.css'


function GalleryItem({gallery}) {
const [imageForward,setImageForward]= useState(true)

const flipImage = () => {
    setImageForward(!imageForward)
  }

  const renderImage = ()=>{
      if(flipImage){
        return <img src={image.path}></img>
      }else{
          return <p>{image.description}</p>
      }
  }



    return (
    <div>
         <li onClick={flipImage}>
        {gallery.path} {gallery.description} {gallery.likes}
        </li>
        <button>LIKE</button> 
    </div>
    
    )
  }
  
  export default GalleryItem;