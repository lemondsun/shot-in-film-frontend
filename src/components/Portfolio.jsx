import React from "react";
import PhotoGallery from '../components/PhotoGallery'
import Header from '../components/Header'

export default function Portfolio(props) {
    return (
      <div id='main-page-section'>
        <Header />
        <PhotoGallery allPhotos={props.allPhotos}/>
      </div>
    )
  }

