import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({ galleryList, updateGallery }) {
    //   console.log('GalleryList: The Prop:', GalleryList);
    return (
        <ul>
            {galleryList.map((gallery) => {
                return < GalleryItem key={gallery.id} gallery={gallery} updateGallery={updateGallery} />
            })}
        </ul>
    )
};

export default GalleryList;