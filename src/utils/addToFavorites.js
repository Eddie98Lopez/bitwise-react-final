const addToFav = (product, dispatch) => {
  dispatch({
    type: "ADD_FAVORITE",
    payload: { ...product, favorite: !product.favorite },
  });
};

export default addToFav;
