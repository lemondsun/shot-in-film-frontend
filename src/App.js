import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ImageUploadPage from "./components/ImageUploadPage";
import { withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { getNewestPost } from "./components/getNewestPost";
import { getAllPhotos } from "./services/api-helper";
import "./App.css";

class App extends Component {
  state = {
    allPhotos: null,
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
        {this.state.latestPosts ? (
          <div>
            <Route
              exact
              path="/"
              render={() => <Home latestPosts={this.state.latestPosts} />}
            />
          </div>
        ) : (
          <></>
        )}

        <Route
          exact
          path="/portfolio"
          render={() => <Portfolio allPhotos={this.state.allPhotos} />}
        />
        <Route
          exact
          path="/upload"
          render={() => <ImageUploadPage />}
        />
      </div>
    );
  }
}

App.propTypes = {
  userView: PropTypes.oneOf([0, 1]).isRequired,
};

export default withRouter(App);
