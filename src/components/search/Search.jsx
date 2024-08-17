import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axiosFun from "../../API/axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const navigate = useNavigate();

  function navigateHandler(path) {
    navigate(path);
  }

  useEffect(() => {
    axiosFun
      .get("/search?q=" + search)
      .then((data) => setSearchData(data.data.products));
  }, [search]);

  return (
    <section className="wrapper mt-8 flex flex-col gap-5 md:flex-row md:justify-between items-center">
      <h2
        className="text-3xl text-lime-600 cursor-pointer
      "
      >
        <Link to={"/profile"}>
          <FaUserCircle />
        </Link>
      </h2>

      <form className="w-11/12 md:w-2/4 relative">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsSearching(true)}
            onBlur={() =>
              setTimeout(() => {
                setIsSearching(false);
              }, 200)
            }
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        <div
          className={`${
            !isSearching ? "hidden" : "grid"
          } absolute inset-[110%_0_auto_0] z-10 gap-1 bg-[#ffffff22] backdrop-blur-sm shadow-md rounded-xl max-h-64 overflow-auto`}
        >
          {searchData?.map((item) => (
            <p
              onClick={() => {
                setIsSearching(false);
                setSearch("");
                navigateHandler(`/product/${item.id}`);
              }}
              key={item.id}
              className="text-sm w-full bg-gray-200 dark:bg-blue-950 dark:text-slate-100 rounded-full p-1 px-3"
            >
              {item.title}
            </p>
          ))}
        </div>
      </form>
    </section>
  );
};

export default memo(Search);
