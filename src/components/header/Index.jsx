import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eternal-logo.png";
import SearchBox from "./SearchBox";
import HeadMenu from "./menu/HeadMenu";
import Cart from "./cart/Cart";
import LoginDrawer from "../login/";
import CartIcon from "./cart/CartIcon";
import AccountIcon from "./profile/AccountIcon";
import WishlistIcon from "./wishlist/WishlistIcon";

const Logo = props => (
  <Link to="/" className="logo-image" onClick={props.onClick}>
    <img src={logo} alt="logo" />
  </Link>
);

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuIsActive: false,
      mobileSearchIsActive: false,
      cartIsActive: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cart !== nextProps.cart) {
      this.showCart();
    }
  }

  menuClose = () => {
    this.setState({ mobileMenuIsActive: false });
    document.body.classList.remove("noscroll");
  };

  closeAll = () => {
    this.setState({
      cartIsActive: false,
      mobileMenuIsActive: false,
      loginIsActive: false
    });
    document.body.classList.remove("noscroll");
  };

  cartToggle = () => {
    this.setState({
      cartIsActive: !this.state.cartIsActive,
      mobileMenuIsActive: false
    });
    document.body.classList.toggle("noscroll");
  };

  showCart = () => {
    this.setState({
      cartIsActive: true,
      mobileMenuIsActive: false
    });
    document.body.classList.add("noscroll");
  };

  showLogin = () => {
    this.setState({
      loginIsActive: true
    });
  };

  onLoginClose = () => {
    this.setState({
      loginIsActive: false
    });
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
                <Logo onClick={this.closeAll} />
              </div>
              <div className="column is-4 has-text-right header-block-right">
                <SearchBox />

                <CartIcon
                  cart={cart}
                  cartIsActive={this.state.cartIsActive}
                  onClick={this.cartToggle}
                />

                <WishlistIcon />

                <AccountIcon onClick={this.showLogin} />

                <div
                  className={this.state.cartIsActive ? "mini-cart-open" : ""}
                >
                  <Cart
                    cart={cart}
                    deleteCartItem={this.props.deleteCartItem}
                    cartToggle={this.cartToggle}
                  />
                </div>

                <LoginDrawer
                  visible={this.state.loginIsActive}
                  onClose={this.onLoginClose}
                  zIndex={1005}
                  width={340}
                  bodyStyle={{ padding: 0 }}
                />
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
