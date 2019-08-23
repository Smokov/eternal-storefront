import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/eternal-logo.png";
import Search from "./SearchBox";
import HeadMenu from "./menu/HeadMenu";
import Cart from "./cart/Cart";
import CartIndicator from "./cart/CartIndicator";
import { ProfileIcon } from "./profile/Profile";
import "./index.css";

const Logo = () => (
  <Link to="/" className="logo-image">
    <img src={logo} alt="logo" />
  </Link>
);

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuIsActive: false,
      mobileSearchIsActive: false,
      cartIsActive: false
    };
  }

  cartToggle = () => {
    this.setState({
      cartIsActive: !this.state.cartIsActive,
      mobileMenuIsActive: false
    });
    document.body.classList.toggle("noscroll");
  };

  showAccountMenu = () => {
    if (this.state.user) {
    }
  };

  render() {
    const { cart, categories } = this.props;
    return (
      <>
        <header
          className={this.state.mobileSearchIsActive ? "search-active" : ""}
        >
          <div className="container">
            <div className="columns is-gapless is-mobile header-container">
              <div className="column is-4" />

              <div className="column is-4 has-text-centered">
                <Logo />
              </div>
              <div className="column is-4 has-text-right header-block-right">
                <Search />

                <CartIndicator
                  cart={cart}
                  onClick={this.cartToggle}
                  cartIsActive={this.state.cartIsActive}
                />
                <ProfileIcon onClick={this.showAccountMenu} />
                <div
                  className={this.state.cartIsActive ? "mini-cart-open" : ""}
                >
                  <Cart
                    cart={cart}
                    deleteCartItem={this.props.deleteCartItem}
                    cartToggle={this.cartToggle}
                  />
                </div>
              </div>
            </div>

            <div className="primary-nav is-hidden-mobile">
              <HeadMenu categories={categories} isMobile={false} />
            </div>
          </div>
        </header>

        <div
          className={
            this.state.mobileMenuIsActive || this.state.cartIsActive
              ? "dark-overflow"
              : ""
          }
          onClick={this.closeAll}
        />
        <div
          className={
            "mobile-nav is-hidden-tablet" +
            (this.state.mobileMenuIsActive ? " mobile-nav-open" : "")
          }
        >
          <HeadMenu
            categories={categories}
            isMobile={true}
            onClick={this.menuClose}
          />
        </div>
      </>
    );
  }
}
