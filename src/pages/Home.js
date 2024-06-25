import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  async function fetchCards() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <div className="grid grid-cols-4 max-w-6xl mx-auto space-x-5 space-y-6 p-4  ">
      {loading ? (
        <Spinner></Spinner>
      ) : items.length === 0 ? (
        <div>No items Found</div>
      ) : (
        items.map((item) => {
          return <Product item={item} ></Product>;
        })
      )}
    </div>
  );
};

export default Home;
