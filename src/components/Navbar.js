import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const {cart} =useSelector((state)=>state);
  return (
    <div className="w-full">
      <div className="flex justify-between max-w-6xl h-20 items-center mx-auto">
        <NavLink>
          <img src="./logo.png" className="ml-5"></img>
        </NavLink>
        <div className="flex text-white items-center space-x-6 mr-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <div className="relative">
          <NavLink to="/cart">
            <FiShoppingCart className="text-2xl mr-1" />
          </NavLink>
          {
            cart.length>0 && 
            <NavLink to='/cart'>
                <span className="absolute -right-1 -top-1 bg-green-600 text-xs text-white w-5 h-5 rounded-full flex justify-center items-center animate-bounce">{cart.length}</span>
            </NavLink>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
