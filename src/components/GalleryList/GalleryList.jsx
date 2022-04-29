
function GalleryList({galleryList}) {
  console.log('GalleryList: The Prop:', GalleryList);
  return (
    <ul>
    {galleryList.map((gallery) => {
      return < GalleryItem 
            key={gallery.id}
            item={gallery}
           />
    })}
  </ul>
  )
}

export default GalleryList;