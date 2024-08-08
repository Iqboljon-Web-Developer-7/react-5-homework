import React, { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";

const App = () => {
  const [isProducts, setIsProducts] = useState(true);
  const [productId, setProductId] = useState();

  return (
    <main className="font-jest dark:bg-slate-900">
      <Header setIsProducts={setIsProducts} />
      <Hero />
      {isProducts ? (
        <Products
          setProductId={setProductId}
          products={isProducts}
          switchProduct={setIsProducts}
        />
      ) : (
        <Product productId={productId} />
      )}
      <Footer />
    </main>
  );
};

export default App;
