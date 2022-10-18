import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import {RetailHome, CheckoutPage, ProductPage, CartPage} from './pages'


import { Routes,Route } from "react-router-dom";



function App() {
  

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<RetailHome/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
