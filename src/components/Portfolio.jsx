import React from "react";
import PhotoGallery from '../components/PhotoGallery'


export default function Portfolio(props) {
    return (
      <div id='main-page-section'>
      
        {props.allPhotos ? <PhotoGallery allPhotos={props.allPhotos}/> :<></>

        }
        
      </div>
    )
  }

