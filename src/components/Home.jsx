import React, { Component } from "react";
import Banner from "./BannerSlider";
import catalogApi from "../api/catalog";

class Home extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.setState({ images: catalogApi.getBannerImages() });
  }

  render() {
    return (
      <div>
        <Banner images={this.state.images} />
        <div>Products List</div>
      </div>
    );
  }
}

export default Home;
