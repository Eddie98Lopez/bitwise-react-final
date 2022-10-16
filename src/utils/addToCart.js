const addToCart = (id, products, dispatch) => {
  const product = products.filter((item) => item.id === id)[0];
  dispatch({ type: "ADD_CART", payload: product });
};

export default addToCart
