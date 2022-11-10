import "./App.css";
import React, { useRef, lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Component/Navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

/* 
 */
const Home = lazy(() => import("./Component/home/Home"));
const Shop = lazy(() => import("./Component/Shop/Shop"));
const AboutUs = lazy(() => import("./Component/aboutus/AboutUs"));
/* 
 */



function App() {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  console.log(Product);

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
  );
}

export default App;
