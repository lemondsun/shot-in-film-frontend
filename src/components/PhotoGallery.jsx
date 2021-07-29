import React from 'react'
import Gallery from 'react-grid-gallery';

export default function PhotoGallery(props) {

  
  const IMAGES = props.allPhotos.map((post) => (
   { src: post.src,
        thumbnail: post.src,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        isSelected: false,
      caption: post.title
    }
  ))
  console.log(IMAGES)
  return (
    <Gallery images={IMAGES}/>
   
  )
 
}
