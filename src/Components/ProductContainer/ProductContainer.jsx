import React, { useEffect, useState } from "react";
import "./productContainer.css";
import Cart from "../Cart/Cart";
import ProductItem from "../ProductItem/ProductItem";
import { useCart } from "../../contexts/cartContext";
import NoDataComponent from "../NoDataComponent/NoDataComponent";

const ProductContainer = () => {
  const [products, setproducts] = useState([]);

  //fetching data from backend api
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((res) => setproducts(res));
  }, []);

  return (
    <div className="m-4">
      <div className="product-container grid sm:grid grid-cols-2  lg:grid-cols-4 gap-2 ">
        {products?.length > 0 ? (
          products?.map((product) => (
            <ProductItem product={product} key={product.id}></ProductItem>
          ))
        ) : (
          <NoDataComponent message="No Products Found" />
        )}
      </div>
      <div className="">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default ProductContainer;
