import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import axios from "axios";
import ProductThumb from "./components/ProductThumb/ProductThumb";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 75%;
  margin: auto;
  margin: 3rem auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navigation />

      <Grid>
        {products.length > 0 &&
          products.map((item) => <ProductThumb key={item.id} product={item} />)}
      </Grid>
    </div>
  );
}

export default App;
