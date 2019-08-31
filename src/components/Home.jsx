import React, { Component } from "react";
import Header from "./header";

class Home extends Component {
  render() {
    const { cart, categories } = this.props;
    return (
      <div>
        <Header cart={cart} categories={categories} />
        <div>Banner</div>
        <div>Products List</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default Home;
