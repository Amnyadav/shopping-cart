import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const Product = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const selected=useSelector((state)=> state.cart.selected);
  // const dispatch= useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    setSelected(!selected);
    // toast.success("item added to cart");
  };

  const addToCart = () => {
    dispatch(add(item));
    setSelected(!selected);
    // toast.error('item removed from cart')
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-6 ml-5 rounded-xl outline ">
      <p className="text-gray-700 text-lg font-semibold w-40  text-left truncate">
        {item.title.substring(0, 15)}...
      </p>
      <p className="text-gray-400 w-40 font-normal text-[10px] text-left">
        {item.description.split(" ").slice(0, 11).join(" ")}...
      </p>
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full"></img>
      </div>
      <div className="self-start w-full flex justify-between ">
        <p className="text-green-600 font-semibold">${item.price}</p>
        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={removeFromCart}
            className="border-2 border-gray-700 text-center rounded-full text-gray-700 uppercase text-[12px]  py-1 px-3 hover:text-white hover:bg-gray-700 font-semibold transition-all duration-300 ease-in"
          >
            Remove item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="border-2 border-gray-700 text-center rounded-full text-gray-700 uppercase text-[12px]  py-1 px-3 hover:text-white hover:bg-gray-700 font-semibold transition-all duration-300 ease-in"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
