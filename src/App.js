import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
//import "materialize-css/dist/css/materialize.css";
import "bulma/css/bulma.css";
//import Navbar from "./components/header/navbar/Navbar";
//import Header from "./components/Home";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
