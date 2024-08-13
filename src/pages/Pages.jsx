import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Delivery from "../components/delivery/Delivery";
import Contact from "../components/contact/Contact";
import NotFound from "../components/404/404";
import Product from "../components/product/Product";
import Category from "../components/category/Category";

const Pages = () => {
  return (
    <div className="dark:bg-slate-900 duration-200">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<Category />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
