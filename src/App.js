import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
//import "materialize-css/dist/css/materialize.css";
import "bulma/css/bulma.css";
import Navbar from "./components/header/navbar/Navbar";
import Header from "./components/header/Index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
