import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Search from "./components/search/Search";

const App = () => {
  const [isProducts, setIsProducts] = useState(true);
  const [productId, setProductId] = useState();

  return (
    <main className="font-jest">
      <Search setIsProducts={setIsProducts} setProductId={setProductId} />
      <Hero />
      <Products
        // setProductId={setProductId}
        products={isProducts}
        switchProduct={setIsProducts}
      />
    </main>
  );
};

export default App;
