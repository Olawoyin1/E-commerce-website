import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SharedLayout from './components/SharedLayout.js';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Contact from './Pages/Contact.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import About from './Pages/About.jsx';
import Posts from './Pages/Posts.jsx';
import User from './Pages/User.jsx';
import Checkout from './Pages/Checkout.jsx';
import Cart from './Pages/Cart.jsx';
import WishList from './Pages/WishList.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import ShopLayout from './components/ShopLayout.js';
import { useState } from 'react';
import ShopComponent from './components/ShopComponent.jsx';





function App() {

  const [liked, setLiked] = useState([]);
  

  // console.log(liked);


  const main = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home liked={liked} setLiked={setLiked} />} />
  
        <Route path="*" element={<ErrorPage />} />
  
        <Route path="cart" element={<Cart liked={liked} setLiked={setLiked} />} />
  
        <Route path="wishlist" element={<WishList liked={liked} setLiked={setLiked} />} />
  
        <Route path="product-detail" element={<ProductDetail />} />

        <Route path="shop-component" element={<ShopComponent liked={liked} setLiked={setLiked} />} />
  
        <Route path="checkout" element={<Checkout />} />
        
        <Route path="contact" element={<Contact />} />
  
        <Route path="user" element={<User />} />
  
        <Route path="about" element={<About />} />
  
        <Route path="shop" element={<Posts liked={liked} setLiked={setLiked}/>} />
  
        <Route path="signup" element={<Signup />} />
  
        <Route path="login" element={<Login />} />
        
        <Route path="shop" element={<ShopLayout />}>
          <Route
            index
            element={
              <Posts liked={liked} setLiked={setLiked} />
            }
          />
          <Route path=":name" element={<ProductDetail />} />
        </Route>
      </Route>
    )
  );
  
  return <RouterProvider router={main} />;
}

export default App;
