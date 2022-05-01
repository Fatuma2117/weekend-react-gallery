import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    getGallery();
  }, [])

  const [galleryList, setGalleryList] = useState([])

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      // console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery broke:', error);
    })
  }
  const updateGallery = (galleryId) => {

    axios({
      method: 'PUT',
      url: `./gallery/like/${galleryId}`
    }).then((response) => {
      console.log(response)
      getGallery();
    })
      .catch((error) => {
        console.log('Error updating ', error);
      })
  };

  return (
    <div className="App .gallery" >
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <GalleryList
        galleryList={galleryList}
        updateGallery={updateGallery} />

    </div>
  );
}

export default App;
