import React, { useState, useEffect, memo } from "react";
import { useLocation, useParams } from "react-router-dom";
import axiosFun from "../../API/axios";
import Products from "../products/Products";

const Product = () => {
  const productId = useParams().id;
  const [category, setCategory] = useState("");
  const [imgIdx, setImgIdx] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (productId) => {
    await axiosFun.get(`/${productId}`).then((data) => setProduct(data.data));
    // setCategory(product.category);
  };

  return (
    <div>
      <section className="wrapper mt-8">
        <div className="max-w-2xl mx-auto border p-4 hover:shadow-md duration-200 rounded-lg bg-slate-300 cursor-pointer">
          <h1>{product.title}</h1>
          <img
            src={product.images && product.images[imgIdx]}
            className="max-h-96 w-fit object-contain mx-auto"
            alt=""
          />
          <div className="flex overflow-x-auto">
            {product.images?.length > 1
              ? product.images.map((img, idx) => (
                  <div className="p-2 border-2" key={idx}>
                    {" "}
                    <img
                      className="object-contain max-w-36 max-h-36"
                      onClick={() => setImgIdx(idx)}
                      src={img}
                    />
                  </div>
                ))
              : ""}
          </div>
          <div className="flex justify-between mt-6">
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
      <Products limit={4} />
    </div>
  );
};

export default memo(Product);
