const addToCart = (product, dispatch) => {
  dispatch({ type: "ADD_CART", payload: product });
};

export default addToCart
