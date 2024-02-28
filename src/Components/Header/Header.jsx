import React, { Fragment } from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Header = () => {
  const { cart } = useCart();
  let location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const totalPrice = cart?.reduce((accumulator, item) => {
    return (accumulator += item.quantity * item.price);
  }, 0);
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-orange-400">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              {/* <li>
                <Link to="/Login">Log-In</Link>
              </li> */}
            </ul>
          </div>
          <h1
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
            className="text-xl font-bold pl-2"
          >
            GHORER-BAZAR
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li
              className={`${
                location.pathname == "/"
                  ? "font-bold bg-orange-500 rounded"
                  : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                location.pathname == "/cart"
                  ? "font-bold bg-orange-500 rounded"
                  : ""
              }`}
            >
              <Link to="/cart">
                Cart{" "}
                { (
                  <div className="bg-white px-1 rounded flex justify-content items-center">
                    <FaBangladeshiTakaSign />
                    <span className="ml-1">{totalPrice}</span>
                  </div>
                )}
              </Link>
            </li>
            {/* <li>
              <Link to="/Login">Log-In</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
