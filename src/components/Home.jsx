import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

 function Home(props) {
  return (
    <div id="header">
      <Carousel>
      {
        props.latestPosts.map((post) => (
          
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={post.src}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{post.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          ))
     }
      </Carousel>
    
     
      <h3 data-name="header-title" id="header-title">
        <span>J</span>essica <span>B</span>allou
        </h3>
      
      <h3 to={'/portfolio'} id="header-sub-title">
        IN FILM
      </h3>
      <Link to={'/portfolio'} >
        <button id='portfolio-button'>portfolio</button>
      </Link>
    </div>
  );
 }
 export default withRouter(Home)
