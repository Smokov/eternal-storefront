import React from "react";
import { Route } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import cartApi from "./api/cart";
import catalogApi from "./api/catalog";
import "./assets/scss/app.scss";

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
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </>
  );
}

export default App;
