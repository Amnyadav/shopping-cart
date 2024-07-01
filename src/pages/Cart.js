import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((total, curr) => total + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex  flex-col lg:flex-row lg:w-[1200px] mx-auto justify-between gap-10  relative">
      {cart.length > 0 ? (
        
          <div className="w-full flex flex-col  mx-auto justify-center  p-2">
            {cart.map((cartItem, index) => {
              return <CartItem cartItem={cartItem} key={index}></CartItem>;
            })}
          </div>
    
      ) : (
        <div className="flex flex-col mx-auto ">
          <div className="text-gray-700 font-semibold text-xl mb-2   ">
            No item found
          </div>
          <NavLink to="/">
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider ">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
      <div className={`${cart.length>0?"w-full mt-5 flex lg:flex-col max-[500px]:flex-col max-[500px]:items-center justify-between  gap-3":"mx-auto"}
           `}>
        <div className="flex flex-col gap-3">
          <div className="font-semibold text-xl text-green-800 ">your cart</div>
          <div className="font-semibold text-5xl text-green-700  -mt-5">
            summary
          </div>
          <span className="text-gray-700 font-semibold text-xl">
            total items:{cart.length}
          </span>
        </div>
        <div className="flex flex-col ">
          {
            totalAmount> 0 && 
            <>
              <p className="text-gray-700 font-semibold text-xl">
              total amount: ${totalAmount}
              </p>
              <button className="bg-green-700 self-start  hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                checkout Now
              </button>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
