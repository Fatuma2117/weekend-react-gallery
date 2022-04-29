import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  useEffect(() => {
    getGallery();
  }, [])
const [galleryItem,setGalleryItem]=useState('')
const [galleryList,setGalleryList]=useState('')

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery broke:', error);
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <ul>
      {galleryList.map((gallery) => {
        return <li key={gallery.id}> {gallery.path} {gallery.description}</li>
      })}
    </ul>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
