import axios from "axios";
/*This function fetches the products data from the server. It uses the dispatch helper function to update the state store.*/

const fetchProducts = async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    //console.log(res)
    const products = res.data.map(item=>{return {...item, favorite:false}})
    //console.log(products)
    dispatch({type:"FETCH_PRODUCTS", payload: products})

  } catch (error) {
    console.log("Error fetching products.");
  }
};

export default fetchProducts;
