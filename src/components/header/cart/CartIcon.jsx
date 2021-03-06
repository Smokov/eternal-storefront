import React from "react";
import bag from "../../../assets/images/shopping-bag.svg";
import close from "../../../assets/images/close.svg";

const CartCount = ({ cart }) => {
  if (cart && cart.items && cart.items.length > 0) {
    const itemsCount = cart.items.reduce((a, b) => a + b.quantity, 0);
    return <span className="cart-count">{itemsCount}</span>;
  }
  return null;
};

const CartImage = ({ cartIsActive }) => {
  if (cartIsActive) {
    return (
      <img
        src={close}
        className="icon"
        alt={"close"}
        title={"close"}
        style={{ minWidth: 24, padding: 4 }}
      />
    );
  }
  return (
    <img
      src={bag}
      className="icon"
      alt={"cart"}
      title={"cart"}
      style={{ minWidth: 24 }}
    />
  );
};

export default class CartIcon extends React.PureComponent {
  render() {
    const { cart, onClick, cartIsActive } = this.props;
    return (
      <span className="cart-button" onClick={onClick}>
        <CartImage cartIsActive={cartIsActive} />
        <CartCount cart={cart} />
      </span>
    );
  }
}
