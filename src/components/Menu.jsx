import React from 'react'
import { SlideDown } from "react-slidedown";
import 'react-slidedown/lib/slidedown.css';
import PhotoGallery from '../components/PhotoGallery'

export default function Menu(props) {
  return (
    <div>
      <button
        onClick={props.handleToggle}
        class='portfolio-button'
      >
        <p class='gallery-text'>Gallery</p>
      </button>

      <SlideDown
        className={'my-dropdown-slidedown'}
      >
      {props.open ? true && <PhotoGallery allPhotos={props.allPhotos}/> : <></>}
      </SlideDown>
    </div>
  )
}
