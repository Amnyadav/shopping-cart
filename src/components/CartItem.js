import React from "react";
import Product from "./Product";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../redux/slices/CartSlice";
const CartItem = ({ cartItem }) => {
    const dispatch =useDispatch();
    const removeFromCart = ()=> {
        dispatch(remove(cartItem.id));
        // toast.success('item removed');

    }
  return (
    <div className="flex  gap-6  items-center p-2 my-2 justify-between border-b-2 border-gray-400">
      <div className="flex justify-center items-center w-[30%]">
        <img src={cartItem.image} className="object-cover"></img>
      </div>
      <div className="w-full space-y-5 self-start">
        <h1 className="text-xl text-slate-700 font-semibold">{cartItem.title}</h1>
        <p className="text-base text-slate-700 font-medium">{cartItem.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-green-600">${cartItem.price}</p>
          <div onClick={removeFromCart} className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
            <MdDelete  className="text-red-700"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
