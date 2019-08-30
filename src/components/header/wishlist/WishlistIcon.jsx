import React from "react";
import { Icon } from "antd";

const Count = ({ wishlist }) => {
  let itemsCount = 0;
  if (wishlist && wishlist.items && wishlist.items.length > 0) {
    itemsCount = wishlist.items.reduce((a, b) => a + b.quantity, 0);
  }
  return <span className="cart-count">{itemsCount}</span>;
};

export default class CartIcon extends React.PureComponent {
  state = { theme: "outlined" };

  onIconMouseEnter = () => {
    this.setState({ theme: "filled" });
  };

  onIconMouseLeave = () => {
    this.setState({ theme: "outlined" });
  };

  render() {
    const { wishlist, onClick } = this.props;
    const { theme } = this.state;
    return (
      <span className="wishlist-button" onClick={onClick}>
        <Icon
          type="heart"
          className="icon"
          theme={theme}
          style={{ fontSize: 28 }}
          onMouseEnter={this.onIconMouseEnter}
          onMouseLeave={this.onIconMouseLeave}
        />
        <Count wishlist={wishlist} />
      </span>
    );
  }
}
