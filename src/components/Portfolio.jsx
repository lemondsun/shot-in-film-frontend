import React from "react";
import PhotoGallery from '../components/PhotoGallery'
<<<<<<< HEAD
import Header from '../components/Header'
=======

>>>>>>> main

export default function Portfolio(props) {
    return (
      <div id='main-page-section'>
<<<<<<< HEAD
        <Header />
        <PhotoGallery allPhotos={props.allPhotos}/>
=======
      
        {props.allPhotos ? <PhotoGallery allPhotos={props.allPhotos}/> :<></>

        }
        
>>>>>>> main
      </div>
    )
  }

