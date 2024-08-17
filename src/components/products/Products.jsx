import React, { useState, useEffect, memo } from "react";
import { FiArrowRight } from "react-icons/fi";
import Filter from "../filter/Filter";
import { useNavigate } from "react-router-dom";
import axiosFun from "../../API/axios";

const Products = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [productsTotal, setProductsTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [params, setParams] = useState("");
  limit = limit || 8;

  const navigate = useNavigate();

  const handleLink = (path) => {
    navigate(path);
  };

  useEffect(() => {
    setIsLoading(true);
    axiosFun
      .get(params, {
        params: {
          limit: limit * offset,
        },
      })
      .then((data) => {
        setProducts(data.data.products);
        setProductsTotal(data.data.total);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [offset, params]);

  const filterProducts = (category) => {
    setParams(`${category}`);
  };

  useEffect(() => {
    setProductsList(
      products?.map((item) => {
        return (
          <div
            onClick={() => {
              handleLink(`/product/${item.id}`);
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
      <div className="flex flex-col gap-5 md:flex-row md:justify-between items-center">
        <h1 className="products__heading text-3xl font-bold flex flex-col text-center md:flex-row items-end gap-2 dark:text-slate-200">
          Товары в наличии
          <a
            href="#"
            className="text-sm font-light flex items-center justify-center gap-2 leading-6 mx-auto"
          >
            Все товары в категории <FiArrowRight />
          </a>
        </h1>

        <Filter filterProducts={filterProducts} />
      </div>

      <div className="products__container pb-10 grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsList}
        {isLoading &&
          new Array(limit).fill().map((_, idx) => (
            <div className="loaders" key={idx}>
              <div
                role="status"
                className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                  <svg
                    className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ))}
      </div>

      <button
        onClick={() => {
          setOffset((prev) => prev + 1);
          console.log(products.length);
          console.log(productsTotal);
        }}
        className={`py-3 px-6 mx-auto bg-yellow-300 rounded-lg items-center justify-center w-fit hover:shadow-orange-400 shadow-md transition-all duration-300 ${
          products.length < productsTotal ? "flex" : "hidden"
        }`}
      >
        Показать еще
      </button>
    </section>
  );
};

export default memo(Products);
