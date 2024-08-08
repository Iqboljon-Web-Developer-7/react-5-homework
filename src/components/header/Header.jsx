import React, { useState, useEffect } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({ setIsProducts }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const themeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="header__container bg-[#F8F8F8] dark:bg-slate-800 dark:text-slate-100 duration-200">
      <div className="header wrapper flex justify-between items-center py-5">
        <h1
          onClick={() => setIsProducts(true)}
          className="header__heading cursor-pointer text-3xl border-b-2 border-b-transparent hover:border-b-orange-400 leading-7"
        >
          clickhouse
        </h1>
        <nav className="header__nav hidden lg:flex gap-5 font-light">
          <a href="#">Каталог</a>
          <a href="#">Доставка</a>
          <a href="#">Условия</a>
          <a href="#">Контакты</a>
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
          <RiMenu5Line className="lg:hidden text-3xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
