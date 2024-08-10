import React, { useEffect, useState } from "react";
import axios from "axios";

const Filter = ({ API__URL, filterProducts }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${API__URL}/category-list`)
      .then((data) => setCategories(data.data));
  }, []);

  return (
    <select
      onChange={(e) => filterProducts(e.target.value)}
      className="mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fi p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">ALL</option>
      {categories?.map((item, idx) => (
        <option value={`/category/${item}`} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Filter;
