
import { useState } from 'react'
import './GalleryItem.css'


function GalleryItem({ gallery, updateGallery }) {
  const [isImage, setIsImage] = useState(true)
  const [likesNumber, setLikesNumber] = useState(0)

  //  const addLike =()=>{
  //       setLikesNumber(likesNumber + 1)
  //     //   console.log('button clicked')

  //   }

  const handleLike = () => {
    // e.preventDefault();
    updateGallery(gallery.id)
  }

  const flipImage = () => {
    setIsImage(!isImage)
  }


  const renderImage = () => {
    if (isImage) {
      return <img className='.gallery' src={gallery.path}></img>
      // "flipped image"

    } else {
      return <p>{gallery.description}</p>
      //   "does this flip?"

    }
  }
  // console.log(gallery.path)


  return (

    <div className='.gallery'>
      <li onClick={flipImage} >
        {renderImage()}
      </li>
      LIKES: {gallery.likes}
      <button className=".button" onClick={handleLike}>❤️</button>
      {/* <footer>Copyright Reserved 2022 ©</footer> */}
    </div>



  )
}

export default GalleryItem;