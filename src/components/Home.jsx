import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { withRouter } from "react-router";
import jessicaballouphotographylogo from '../images/jessicaballouphotographylogo.png'
import Menu from './Menu'
import Footer from './Footer'

function Home(props) {
  return (
    <div id="main">
      <img src={jessicaballouphotographylogo} class='title' alt='jessica ballou title' />
      <div class='overlay'></div>
      <Carousel>
        {props.latestPosts.map((post) => (
          <Carousel.Item>
            <img className="d-block w-100" src={post.src} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <Menu
      open={props.open}
      handleToggle={props.handleToggle}
      allPhotos={props.allPhotos}
    />
<Footer/>
    </div>
  );
}
export default withRouter(Home);
