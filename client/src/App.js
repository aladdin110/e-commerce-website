import "./App.css";
import React, { useRef, lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Route, Routes,useParams } from "react-router-dom";

import LayoutOne from "./layouts/LayoutOne";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

/* 
 */
const Productt = lazy(() => import("./pages/Shop/Product.js"));
const Home = lazy(() => import("./pages/home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const AboutUs = lazy(() => import("./pages/aboutus/AboutUs"));
const ContactUs = lazy(() => import("./pages/contact/ContactUs"));
const LoginRegister=lazy(()=>import("./pages/loginandregister/LoginRegister.js"));
const Wishlist=lazy(()=>import("./pages/Wishlist/Wishlist"));
/* 
 */


function App() {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  console.log(Product);
  let { id } = useParams();
  return (

    <ToastProvider placement="bottom-left">
  
      <div className="App">
   
        <BreadcrumbsProvider>
          <BrowserRouter>
          <>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
             
              <LayoutOne headerTop="visible"> <Navbar />
 <Routes>
                <Route exact path="/" element={<Home />}>
                  
                </Route>
                <Route path="shop" element={<Shop />}></Route>
                <Route path="wishlist" element={<Wishlist />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="aboutus" element={<AboutUs />}></Route>
                <Route
                  path={"/product/:id"}
               element={
                    <Productt />
                  }
                  render={(routeProps) => (
              
                    <Productt {...routeProps} key={routeProps.params.id} />
                
              
            )}
                ></Route>
                <Route path="contactus" element={<ContactUs />}></Route>
                <Route path="login-register" element={<LoginRegister />}></Route>

                <Route replace to="/" />
              </Routes>

              </LayoutOne>
             
            </Suspense>
            </>
          </BrowserRouter>
        </BreadcrumbsProvider>
      </div>
    </ToastProvider>
  );
}

export default App;
