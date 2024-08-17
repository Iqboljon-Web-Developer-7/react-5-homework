import React, { memo } from "react";
import img from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper mt-8 py-5  bg-[#F8F8F8] dark:bg-slate-800 dark:text-slate-100">
      <div className="fooer wrapper pb-10">
        <h1 className="header__heading mt-8 font-bold w-fit cursor-pointer text-3xl border-b-2 border-b-transparent hover:border-b-orange-400 leading-7">
          clickhouse
        </h1>
        <div className="footer__contents grid md:grid-cols-2 lg:grid-cols-[3fr_3fr_3fr_2fr] mt-6 gap-8 lg:gap-[4%] text-nowrap">
          <div className="content">
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="text-sm grid gap-3 font-light">
              <li className="text-wrap">
                Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.
              </li>
              <li className="text-wrap">
                УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом
                реестре 158299
              </li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          <div className="content">
            <h4 className="font-bold mb-4">Меню</h4>
            <ul className="text-sm grid gap-3 font-light">
              <li>Главная | Каталог | Товары в наличии</li>
              <li>Скидки | Популярное | Вдохновение</li>
              <li>Доставка | Услуги | Условия</li>
              <li>Контакты | Вставить | Cписок покупок</li>
              <li>Корзина | Личный кабинет | Избранное</li>
            </ul>
          </div>
          <div className="content">
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="text-sm grid gap-3 font-light">
              <li>г.Минск</li>
              <li>Ул. Первомайская, Д. 1, Кв. 43</li>
              <li>+ 375 434 847 28 84</li>
              <li>+ 375 448 473 09 48</li>
              <li>ikeaekspress@gmail.com</li>
            </ul>
          </div>
          <div className="content flex items-end">
            <img src={img} alt="logo of instagram" className="w-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
