import "./App.css";
import React, { useRef, lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutus/AboutUs";
import Shop from "./components/Shop/Shop";
import Home from "./components/home/Home";
import ContactUs from "./components/contact/ContactUs";

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
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route replace to="/" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
