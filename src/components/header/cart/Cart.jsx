import React from "react";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { formatPrice } from "../../../lib/formatting";

export default class Cart extends React.PureComponent {
  render() {
    const { cart, deleteCartItem, cartToggle } = this.props;

    if (cart && cart.items && cart.items.length > 0) {
      const items = cart.items.map(item => (
        <CartItem key={item.id} item={item} deleteCartItem={deleteCartItem} />
      ));

      return (
        <div className="mini-cart">
          {items}
          <hr className="separator" />
          <div className="columns is-mobile is-gapless">
            <div className="column is-7">
              <b>{"Sub-Total"}</b>
            </div>
            <div className="column is-5 has-text-right">
              <b>{formatPrice(cart.subtotal)}</b>
            </div>
          </div>
          <NavLink
            className="button is-primary is-fullwidth has-text-centered"
            style={{ textTransform: "uppercase" }}
            to="/checkout"
            onClick={cartToggle}
          >
            {"Fechar Pedido"}
          </NavLink>
        </div>
      );
    }
    return (
      <div className="mini-cart">
        <p>{"A sacola está vazia"}</p>
      </div>
    );
  }
}
