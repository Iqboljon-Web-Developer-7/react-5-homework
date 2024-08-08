import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const Products = ({ switchProduct, setProductId }) => {
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=8")
      .then((data) => setProducts(data.data.products));
  }, []);

  useEffect(() => {
    setProductsList(
      products?.map((item) => {
        return (
          <div
            onClick={() => {
              setProductId(item.id);
              switchProduct(false);
            }}
            key={item.id}
            className="product border p-2 hover:border-slate-700 dark:border-slate-400 dark:hover:border-lime-400 duration-300 dark:text-slate-200 cursor-pointer hover:shadow-md"
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
        );
      })
    );
  }, [products]);

  return (
    <section className="wrapper products mt-10">
      <h1 className="products__heading text-3xl font-bold flex items-end gap-4 dark:text-slate-200">
        Товары в наличии{" "}
        <a
          href="#"
          className="text-sm font-light flex items-center justify-center gap-2 leading-6"
        >
          Все товары в категории <FiArrowRight />
        </a>
      </h1>

      <div className="products__container pb-10 grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsList}
      </div>
    </section>
  );
};

export default Products;
