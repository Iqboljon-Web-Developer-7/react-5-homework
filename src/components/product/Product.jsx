import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Product = () => {
  const productId = useParams().id;
  const [category, setCategory] = useState("");
  const [imgIdx, setImgIdx] = useState(0);
  const [product, setProduct] = useState([]);
  const [productsList, setProductsList] = useState([]);

  let API__URL = "https://dummyjson.com/products/";

  useEffect(() => {
    fetchProduct(`${API__URL}${productId}`);
  }, []);

  const fetchProduct = async (api) => {
    await axios.get(api).then((data) => setProduct(data.data));
    setCategory(product.category);
  };

  useEffect(() => {
    axios.get(`${API__URL}category/${product.category}`).then((data) => {
      console.log(data.data.products);
      console.log(productsList);

      data.data.products.length > 0
        ? setProductsList(
            data.data.products?.map((item) => (
              <div
                onClick={() => {
                  handleLink(`/product/${item.id}`);
                }}
                key={item.id}
                className="product shrink-0 w-[30%] border p-2 hover:border-slate-700 dark:border-slate-400 dark:hover:border-lime-400 duration-300 dark:text-slate-200 cursor-pointer hover:shadow-md"
              >
                <div className="product__image flex items-center justify-center">
                  <img
                    src={item.images[0]}
                    alt="something"
                    className="w-fit max-h-56"
                  />
                </div>
                <div className="product__info mt-4 px-2">
                  <div className="product__info--name-price flex justify-between items-center">
                    <h3 className="product__name">{item.title}</h3>
                    <p className="product__price text-red-600">{item.price}$</p>
                  </div>
                  <div className="product__description line-clamp-4 text-sm mt-2 text-slate-700 dark:text-slate-300">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))
          )
        : null;
    });
  }, [product]);

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

      <div className="products wrapper pb-10 gap-4 mt-10 flex overflow-x-auto">
        {productsList}
      </div>
    </div>
  );
};

export default Product;
