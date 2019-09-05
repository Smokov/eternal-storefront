import React from "react";
import { Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./assets/scss/app.scss";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Header from "./components/header";
import Footer from "./components/footer";
import cartApi from "./api/cart";
import catalogApi from "./api/catalog";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingBag,
  faUser,
  faUserCog,
  faUserPlus,
  faUserLock,
  faLock
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookSquare,
  faTwitter,
  faShoppingBag,
  faUser,
  faUserPlus,
  faUserCog,
  faUserLock,
  faLock
);

const cart = cartApi.getCart();
const categories = catalogApi.getCategories();

function App() {
  return (
    <>
      <Header cart={cart} categories={categories} />
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Footer />
    </>
  );
}

export default App;
