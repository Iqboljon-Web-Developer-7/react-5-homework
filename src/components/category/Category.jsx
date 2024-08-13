import React from "react";

import img1 from "../../assets/categoryies/img-1.png";
import img2 from "../../assets/categoryies/img-2.png";
import img3 from "../../assets/categoryies/img-3.png";
import img4 from "../../assets/categoryies/img-4.png";
import img5 from "../../assets/categoryies/img-5.png";
import img6 from "../../assets/categoryies/img-6.png";
import img7 from "../../assets/categoryies/img-7.png";
import img8 from "../../assets/categoryies/img-8.png";

const data = [
  {
    img: img1,
    title: "Мебель",
    categories: [
      "Шкафы и шкафы-купе",
      "Стеллажи и книжные шкафы",
      "Столы",
      "Стулья",
      "Кровати",
      "Больше",
    ],
  },
  {
    img: img2,
    title: "Аксессуары для создания уюта",
    categories: [
      "Аксессуары для создания уюта",
      "Постельное белье",
      "Одеяла",
      "Комплекты постельного белья",
      "Подушки",
      "Пледы",
      "Больше",
    ],
  },
  {
    img: img3,
    title: "Хранение и порядок",
    categories: [
      "Аксессуары для хранения",
      "Крючки и полки на стенуобувницы, полки с крючками для хранения",
      "Вешалки, обувницы, полки с крючками для хранения",
      "Системы для хранения",
      "Шкафы и шкафы-купе",
      "Больше",
    ],
  },
  {
    img: img4,
    title: "Аксессуары ",
    categories: [
      "Шкафы и шкафы-купе",
      "Стеллажи и книжные шкафы",
      "Столы",
      "Стулья",
      "Кровати",
      "Больше",
    ],
  },
  {
    img: img5,
    title: "Мебель",
    categories: [
      "Шкафы и шкафы-купе",
      "Стеллажи и книжные шкафы",
      "Столы",
      "Стулья",
      "Кровати",
      "Больше",
    ],
  },
  {
    img: img6,
    title: "Аксессуары для создания уюта",
    categories: [
      "Аксессуары для создания уюта",
      "Постельное белье",
      "Одеяла",
      "Комплекты постельного белья",
      "Подушки",
      "Пледы",
      "Больше",
    ],
  },
  {
    img: img7,
    title: "Хранение и порядок",
    categories: [
      "Аксессуары для хранения",
      "Крючки и полки на стенуобувницы, полки с крючками для хранения",
      "Вешалки, обувницы, полки с крючками для хранения",
      "Системы для хранения",
      "Шкафы и шкафы-купе",
      "Больше",
    ],
  },
  {
    img: img8,
    title: "Аксессуары ",
    categories: [
      "Шкафы и шкафы-купе",
      "Стеллажи и книжные шкафы",
      "Столы",
      "Стулья",
      "Кровати",
      "Больше",
    ],
  },
];
const Category = () => {
  return (
    <section className="category wrapper dark:text-slate-200">
      <h2 className="mt-6 text-2xl font-bold">Каталог</h2>
      <div className="categories sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-y-8 mt-6">
        {data?.map((item, idx) => {
          return (
            <div
              className="categories--info px-4 mt-4 flex flex-col gap-6 text-sm"
              key={idx}
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <h3 className="font-bold leading-3">{item.title}</h3>
              <div className="grid gap-4">
                {item.categories?.map((category, idx) => {
                  return <p key={idx}>{category}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
