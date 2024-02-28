import React from "react";
import { useCart } from "../../contexts/cartContext";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

const CartItem = ({ cartItem }) => {
  const { cart, setCart } = useCart();
  const { id, name, price, quantity, img: image } = cartItem || {};
  const totalPrice = price * quantity;
  const handleAddClick = () => {
    const isExist = cart?.find((cartItem) => cartItem.id === id);
    if (isExist) {
      const updatedCart = cart?.map((cartItem) => {
        if (cartItem?.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });
      setCart([...updatedCart]);
    } else {
      const clickedProduct = {
        ...product,
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, clickedProduct]);
    }
  };
  const handleRemoveClick = () => {
    if (quantity > 0) {
      let updatedCart = cart
        ?.map((cartItem) => {
          if (cartItem?.id === id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => cartItem?.quantity > 0);

      setCart([...updatedCart]);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-4 my-4 p-2">
      <div className="flex justify-content items-center">
        <img src={image} alt={name} width={"50px"} height={"50px"} />
        <span className="ml-2">{name}</span>
      </div>
      <div className="flex justify-content items-center">
        <button className="mr-4 font-extrabold" onClick={handleAddClick}>
          <BsPlusCircle />
        </button>
        <span className="">
          {quantity}
        </span>
        <button
          //   disabled={quantity === 0}
          className="ml-4 font-extrabold"
          onClick={handleRemoveClick}
        >
          <BiMinusCircle />
        </button>
      </div>
      <div>BDT {price}</div>
      <div>BDT {totalPrice}</div>
    </div>
  );
};

export default CartItem;
