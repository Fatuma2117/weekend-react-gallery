import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({galleryList}) {
//   console.log('GalleryList: The Prop:', GalleryList);
  return (
    <ul>
    {galleryList.map((gallery) => {
      return < GalleryItem key={gallery.id} gallery={gallery} />
    })}
  </ul>
  )
}

export default GalleryList;