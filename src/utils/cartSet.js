const cartSet = (array) => {
  const boop = array.map((product) => product.id);

  const ids = [...new Set(boop)];

  const cartSet = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const product = array.filter((product) => product.id === id)[0];
    cartSet.push(product);
  }

  return cartSet;
};

export default cartSet;
