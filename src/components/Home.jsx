import React, { Component } from "react";
import Header from "./header";
import api from "../api/catalog";

const cartItems = [];
const categories = api.getCategories();

class Home extends Component {
  render() {
    return (
      <div>
        <Header cart={cartItems} categories={categories} />
        {/* <div>Navbar</div> */}
        <div>Banner</div>
        <div>Products List</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default Home;
