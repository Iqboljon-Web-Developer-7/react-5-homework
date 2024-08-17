import React, { memo, useEffect, useState } from "react";
import axiosFun from "../../API/axios";

const Filter = ({ filterProducts }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosFun.get(`/category-list`).then((data) => setCategories(data.data));
  }, []);

  return (
    <select
      onChange={(e) => filterProducts(e.target.value)}
      className="mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fi p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">ALL</option>
      {categories?.map((item, idx) => (
        <option value={`/category/${item}`} key={idx}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default memo(Filter);
