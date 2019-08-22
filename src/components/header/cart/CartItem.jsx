import React from "react";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../../../lib/formatting";
import placeholder from "../../../images/thumbnail-placeholder.png";

const CartItem = ({ item, deleteCartItem }) => {
  //const thumbnail = getThumbnailUrl(item.image_url, 50);

  return (
    <div className="columns is-mobile">
      <div className="column is-2">
        <div className="image">
          <NavLink to={item.path}>
            <img src={placeholder} alt="thumbnail" />
          </NavLink>
        </div>
      </div>
      <div className="column">
        <div>
          <NavLink to={item.path}>{item.name}</NavLink>
        </div>
        {item.variant_name.length > 0 && (
          <div className="cart-option-name">{item.variant_name}</div>
        )}
        <div className="cart-quantity">{`Qtd: ${item.quantity}`}</div>
      </div>
      <div className="column is-4 has-text-right">
        <div className="mini-cart-item-price">
          {formatPrice(item.price_total)}
        </div>
        <a
          className="button is-light is-small"
          onClick={() => deleteCartItem(item.id)}
        >
          {"Remover"}
        </a>
      </div>
    </div>
  );
};

export default CartItem;
