function GalleryItem({gallery}) {
    return (
      <li>
        {gallery.path} {gallery.description}
      </li>
    )
  }
  
  export default GalleryItem;