import { toast } from "react-toastify";
import { useCart } from "../../contexts/cartContext";
import Button from "../Button/Button";

const ProductItem = ({ product }) => {
  const { id, name, img, price } = product || {};
  const { cart, setCart } = useCart();

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
    toast.success(`${name} is added to the cart`);
  };

  return (
    <div className="border-2 p-4 shadow-lg">
      <img src={img} alt="" />
      <p className="font-bold text-xl mt-2"> Name : {name}</p>
      <p className="font-bold">Price :$ {price}</p>
      <div>
        <Button handleClick={handleAddClick}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;
