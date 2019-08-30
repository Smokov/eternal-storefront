import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import "./App.css";

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

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
