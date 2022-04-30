import {useState} from 'react'
import './GalleryItem.css'


function GalleryItem({gallery}) {
const [isImage,setIsImage]= useState(true)
const [likesNumber,setLikesNumber]=useState(0)

 const addLike =()=>{
      setLikesNumber(likesNumber + 1)
    //   console.log('button clicked')
    

  }
const toggleImage = () => {
    setIsImage(!isImage)
    console.log('image clicked')
  }

  const renderImage = ()=>{
      if(toggleImage){
        return <img className = '.gallery'src={gallery.path}></img>
        // "flipped image"
        
      }else{
          return  <p>{gallery.description}</p>
        //   "does this flip?"
        
      }
  }


 
    return (
    <div className= '.gallery'>
         <li onClick={toggleImage}>{renderImage()}
        <p>{gallery.description}</p> 
        </li>
        <p>❤️{likesNumber}</p>
        <button className = ".button"onClick={addLike}>LIKE</button> 
    </div>
   
    
    )
  }
  
  export default GalleryItem;