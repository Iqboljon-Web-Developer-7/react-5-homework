import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const productId = +useLocation().pathname.match(/\d+/g).join();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProduct(`https://dummyjson.com/products/${productId}`);
  }, [product]);

  const fetchProduct = async (api) => {
    await axios.get(api).then((data) => setProduct(data.data));
  };

  return (
    <section className="wrapper mt-8">
      <div className="max-w-2xl mx-auto border p-4 hover:shadow-md duration-200 rounded-lg bg-slate-300 cursor-pointer">
        <h1>{product.title}</h1>
        <img
          src={product.images && product.images[0]}
          className="max-h-96 w-fit mx-auto"
          alt=""
        />
        <div className="flex justify-between">
          {" "}
          <p className="text-red-600">Price: {product.price}$</p>
          <p className="text-orange-900">
            <span className="text-black">Category:</span> {product.category}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-orange-400">Rating: {product.rating}</p>
          <p>{product.returnPolicy}</p>
        </div>
        <p className="text-slate-600">{product.description}</p>
      </div>
    </section>
  );
};

export default Product;
