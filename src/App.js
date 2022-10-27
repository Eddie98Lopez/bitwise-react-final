import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import {RetailHome, ProductPage, CartPage} from './pages'
import CheckoutForm from "./components/Checkout/CheckoutForm";
import { Routes,Route, Outlet } from "react-router-dom";
import CartList from "./components/Cart/CartList";
import Category from "./pages/Category";
import CategoryList from "./components/Categories/CategoryList";



function App() {
  
  
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<RetailHome/>}/>

        <Route path='/product/:id' element={<ProductPage/>}/>

        <Route path='cart' element={<CartPage/>}>
          <Route path='' element={<CartList/>}/> 
          <Route path='checkout' element={<CheckoutForm/>}/>
        </Route>

        <Route path='category' element={<Category/>}>
          <Route path=':category' element={<CategoryList/>}/> 
        </Route>
      
        
      </Routes>
      <Outlet/>

    </div>
  );
}

export default App;
