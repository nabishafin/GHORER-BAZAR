import React from "react";
import { useCart } from "../../contexts/cartContext";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import NoDataComponent from "../NoDataComponent/NoDataComponent";
import Button from "../Button/Button";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart?.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/customer-details");
  };

  return cart?.length > 0 ? (
    <div className="w-full p-16 ">
      <hr />
      <div className="grid grid-cols-4 gap-4 my-4">
        <div className="font-bold ">Name</div>
        <div className="font-bold ">Quantity</div>
        <div className="font-bold ">Price</div>
        <div className="font-bold ">Total Price</div>
      </div>
      <hr />
      {cart?.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <hr />
      <div className="grid grid-cols-4 gap-4 my-4">
        <div></div>
        <div className=""></div>
        <div></div>
        <div>BDT {totalPrice}</div>
        <div className="flex">
          <Button handleClick={handleClick}>Buy Now</Button>
        </div>
      </div>
    </div>
  ) : (
    <NoDataComponent message="Please Order Something" />
  );
};

export default Cart;
