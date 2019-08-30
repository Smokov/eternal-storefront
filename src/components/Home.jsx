import React, { Component } from "react";
import Header from "./header";
import api from "../api/catalog";

const cart = {
  subtotal: 900,
  items: [
    {
      id: 1,
      name: "borboleta shine",
      path: "borboleta-shine",
      quantity: 9,
      price_total: 90
    },
    {
      id: 2,
      name: "snowflake",
      path: "charm-snowflake",
      quantity: 1,
      price_total: 90
    }
  ]
};
const categories = api.getCategories();

class Home extends Component {
  render() {
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
