import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../../contexts/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <CartProvider>
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer autoClose={1000}/>
      </CartProvider>
    </div>
  );
};

export default Root;
