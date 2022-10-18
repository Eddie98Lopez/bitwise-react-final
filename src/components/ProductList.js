import React from "react";
import ProductGrid from "./styledComponents/ProductGrid";
import ProductThumb from "./ProductThumb/ProductThumb";

const ProductList = (props) => {
  const products = props.products;
  return <ProductGrid>
    {products.map(item=><ProductThumb key={item.id} product={item}/>)}
  </ProductGrid>;
};

export default ProductList;
