import "./App.css";
import React, { useRef, lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import AboutUs from "./components/aboutus/AboutUs";
import Shop from "./components/Shop/Shop";
import Home from "./components/home/Home";
import ContactUs from "./components/contact/ContactUs";
=======
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

/* 
 */
const Home = lazy(() => import("./Component/home/Home"));
const Shop = lazy(() => import("./Component/Shop/Shop"));
const AboutUs = lazy(() => import("./Component/aboutus/AboutUs"));
/* 
 */


>>>>>>> 9213768943d19ebfecf2a4f59ba977a7f4420e0b

function App() {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  console.log(Product);

  return (
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route replace to="/" />
        </Routes>
      </BrowserRouter>
      
    </div>
=======
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
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="shop" element={<Shop />}></Route>
                <Route path="aboutus" element={<AboutUs />}></Route>
                <Route replace to="/" />
              </Routes>
            </Suspense>
            </>
          </BrowserRouter>
        </BreadcrumbsProvider>
      </div>
    </ToastProvider>
>>>>>>> 9213768943d19ebfecf2a4f59ba977a7f4420e0b
  );
}

export default App;
