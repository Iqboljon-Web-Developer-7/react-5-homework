import React from "react";

import contactImg1 from "../../assets/contact/img-wiki.svg";
import contactImg2 from "../../assets/contact/img-facebook.svg";
import contactImg3 from "../../assets/contact/img-google-plus.svg";

import contactImg from "../../assets/contact/contact-1.png";

const Contact = () => {
  return (
    <section className="contact wrapper mt-8 grid lg:grid-cols-[8fr_4fr] dark:text-slate-200">
      <div className="contact__main">
        <h3 className="text-xl text-[2.25rem] font-bold text-center md:text-start mb-12">
          Контакты
        </h3>
        <div className="contact__main--container place-items-center text-center md:text-start grid gap-4 md:gap-0 md:grid-cols-3 font-[sans-serif] font-light text-nowrap ">
          <div className="contact__main--item">
            <p>+ 375 434 847 28 84</p>
            <p>+ 375 448 473 09 48</p>
            <p>ikeaekspress@gmail.com</p>
          </div>
          <div className="contact__main--item">
            <p>г.Минск</p>
            <p>Ул. Первомайская</p>
            <p>Д. 1, Кв. 43</p>
          </div>
          <div className="contact__main--item">
            <p>ОГРН: 3748 49384 4847 30948</p>
            <p>ООО “Икеа”</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
        <div className="contact__socials grid grid-cols-3 mt-8 max-w-96 mx-auto md:mx-[initial]">
          <div className="contact__socials--item p-3 w-[5.2rem] h-[5.2rem] border rounded-full grid place-items-center">
            <img src={contactImg1} className="w-fit" alt="" />
          </div>
          <div className="contact__socials--item p-3 w-[5.2rem] h-[5.2rem] border rounded-full grid place-items-center">
            <img src={contactImg2} className="w-fit" alt="" />
          </div>
          <div className="contact__socials--item p-3 w-[5.2rem] h-[5.2rem] border rounded-full grid place-items-center">
            <img src={contactImg3} className="w-fit" alt="" />
          </div>
        </div>
      </div>
      <div className="contact__img hidden lg:block">
        <img src={contactImg} alt="" />
      </div>
    </section>
  );
};

export default Contact;
