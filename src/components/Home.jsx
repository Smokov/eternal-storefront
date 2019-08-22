import React, { Component } from "react";
import Header from "./header";

const cartItems = [];

class Home extends Component {
  render() {
    return (
      <div>
        <Header cart={cartItems} />
        {/* <div>Navbar</div> */}
        <div>Banner</div>
        <div>Products List</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default Home;
