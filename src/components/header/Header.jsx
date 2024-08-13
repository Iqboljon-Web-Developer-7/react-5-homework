import React, { useState, useEffect, useRef } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.scss";

import MobileNav from "../mobileNav/MobileNav";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) || "light");
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    console.log(1);
  }, [theme]);

  const handleScroll = () => {
    window.scrollY > 110 && setIsHeaderFixed(true);
    window.scrollY < 110 && setIsHeaderFixed(false);
  };

  const themeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };

  return (
    <header
      className={`header__container bg-[#F8F8F8] dark:bg-slate-800 dark:text-slate-100 ${
        isHeaderFixed && "h-[4.6rem]"
      } `}
    >
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`header wrapper flex justify-between items-center py-5 h-[4.6rem] duration-200 z-10 ${
          isHeaderFixed &&
          "fixed max-w-[initial] animate-fadein shadow-md bg-[#F8F8F866] dark:bg-[#00000066] backdrop-blur-sm"
        } inset-[0_0_auto_0]`}
      >
        <h1
          onClick={() => navigateHandler("/")}
          className="header__heading cursor-pointer text-3xl border-b-2 border-b-transparent hover:border-b-orange-400 leading-7"
        >
          clickhouse
        </h1>
        <nav className="header__nav hidden lg:flex gap-5 font-light">
          <NavLink to={"/category"}>Каталог</NavLink>
          <NavLink to={"/delivery"}>Доставка</NavLink>
          <NavLink to={"*"}>Условия</NavLink>
          <NavLink to={"/contact"}>Контакты</NavLink>
        </nav>
        <div className="header__contact flex items-center justify-center gap-6 ">
          <div className="hidden lg:flex items-end flex-col">
            <div className="leading-6 flex gap-3 text-[1.2rem]">
              <a href="tel:+7 999 999 99 99">+ 375 736 463 64 72</a>
              <span className="text-slate-400">/</span>
              <a href="tel:+7 999 999 99 99">+ 375 736 463 64 72</a>
            </div>
            <a className="leading-6 text-sm font-light duration-200" href="#">
              Заказать звонок
            </a>
          </div>
          <div className="modes flex gap-3 text-3xl">
            <IoIosSunny
              onClick={themeSwitcher}
              className={`${theme == "light" && "hidden"}`}
            />
            <MdOutlineDarkMode
              onClick={themeSwitcher}
              className={`${theme == "dark" && "hidden"}`}
            />
          </div>
          <RiMenu5Line
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
