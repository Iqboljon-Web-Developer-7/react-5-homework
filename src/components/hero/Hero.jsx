import React from "react";
import DemoCarousel from "../carousel/Carousel";
import { LuDot } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="wrapper hero mt-14 lg:mt-24 pb-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-3 dark:text-slate-200 dark:bg-slate-900 duration-200">
      <div className="hero__info py-12 pl-11 pr-10 border rounded-xl h-fit">
        <h2 className="hero__inf--heading text-5xl leading-10 font-bold">
          Мебель на любой вкус!
        </h2>
        <ul className="my-6 leading-6 list-inside list-disc marker:text-[#FF9900] text-[1rem]">
          <li>Худи, чашки для горячего чая и термосы </li>
          <li>Eлочные игрушки, брелочки</li>
          <li>Начало списка вещей, которые можно </li>
        </ul>
        <button className="bg-[#FF9900] mt-4 block w-full py-3 rounded-full border text-white hover:bg-transparent hover:text-[#ff9900] duration-200">
          Перейти в каталог
        </button>
        <button className="border mt-2 block w-full py-3 rounded-full text-[#ff9900] hover:bg-[#ff9900] hover:text-[#fff] duration-200">
          Внести список артикулов
        </button>
      </div>
      <DemoCarousel />
    </section>
  );
};

export default Hero;
