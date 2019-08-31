import cart from "../data/cart";

const getCart = () => {
  return cart;
};

const addCartItem = item => {
  cart.items.push(item);
  return cart;
};

const removeCartItem = itemToRemove => {
  cart = cart.items.filter(item => item.id !== itemToRemove.id);
  return cart;
};

export default {
  getCart,
  addCartItem,
  removeCartItem
};
