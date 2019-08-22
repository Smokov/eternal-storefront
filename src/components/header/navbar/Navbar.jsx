import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/eternal-logo-white.png";
import "./Navbar.css";

const Navlink = props => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src={logo} height={60} style={{ padding: 5 }} alt="logo" />
        </Link>

        <ul className="right">
          <li>
            <Link to="/charms">Charms</Link>
          </li>
          <li>
            <Link to="/bracelets">Braceletes</Link>
          </li>
          <li>
            <Link to="/rings">Anéis</Link>
          </li>
          <li>
            <Link to="/earings">Brincos</Link>
          </li>
          <li>
            <Link to="/necklaces">Colares</Link>
          </li>
          <li>
            <Link to="/account">
              <i className="material-icons">account_box</i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navlink;
