import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen"
import { withRouter } from "react-router";
import Menu from './components/Menu';
import "bootstrap/dist/css/bootstrap.min.css";
import { getNewestPost } from "./components/getNewestPost";
import { getAllPhotos } from "./services/api-helper";
import Footer from "./components/Footer"
import "./App.css";

class App extends Component {
  state = {
    allPhotos: null,
    open: false,
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
    console.log(this.state)
  };

  async componentDidMount() {
    let allPhotos = await getAllPhotos();
    this.setState({
      allPhotos,
    });

    let latestPosts = getNewestPost(this.state.allPhotos);
    this.setState({
      latestPosts,
    });
  }

  render() {
    return (
      <div className="app">
        
        {
          //this creates a loading screen to deal with delays getting photos from heroku
          this.state.latestPosts ? (
          <div>
            <Route
              exact
              path="/"
                render={() => <Home
                  latestPosts={this.state.latestPosts}
                  open={this.state.open}
                  handleToggle={this.handleToggle}
                  allPhotos={this.state.allPhotos}
                />}
            />
          </div>
        ) : (
          <LoadingScreen/>
        )}
      </div>
    );
  }
}

App.propTypes = {
  userView: PropTypes.oneOf([0, 1]).isRequired,
};

export default withRouter(App);
