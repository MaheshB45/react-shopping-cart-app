import React from "react";
import { NavLink } from "react-router-dom";
import CartLogo from "../Assets/icons8-shopping-cart-100.png";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={CartLogo} alt="cart" />
        <p>Shopping Cart</p>
      </div>

      <div>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/cart">Cart Page</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
