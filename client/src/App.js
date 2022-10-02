import "./App.css";
import React, { useRef, lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Component/Navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Component/aboutus/AboutUs";
import Shop from "./Component/Shop/Shop";
import Home from "./Component/home/Home";

function App() {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  console.log(Product);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route replace to="/" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
