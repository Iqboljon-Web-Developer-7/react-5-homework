import React, { memo } from "react";

import deliveryPerson from "../../assets/delivery/delivery-guy1-1.png";
import deliveryCar from "../../assets/delivery/delivery-car1.png";

const Delivery = () => {
  return (
    <section className="delivery wrapper dark:text-slate-200">
      <div className="delivery__hero grid md:grid-cols-[3fr_4fr]">
        <div className="delivery__hero--info font-light">
          <h2 className="delivery__hero--heading mt-6 text-[2.25rem] font-bold">
            Доставка
          </h2>
          <div className="grid gap-4 mt-8 text-[1rem]">
            <p>Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.</p>
            <p>
              Наше преимущество - фиксированная стоимость доставки по Беларуси.
              Такой приятной цены вы не найдете у транспортных компаний.
            </p>
            <p>
              Наше главное преимущество – работа сразу с двумя магазинами IKEA.
              Это дает большую вероятность того, что нужный вам товар будет в
              наличии.
            </p>
            <p>Наша задача – доставить заказ своевременно и без повреждений.</p>
            <p className="font-bold">Как мы работаем?</p>
            <p>
              Мы закупаем выбранные вами товары в магазинах IKEA. После того как
              они прибывают на наши склады, мы начинаем доставлять их вам.
            </p>
            <p>
              Доставляем заказ до подъезда. Подъем на этаж согласовывается
              заранее с оператором и оплачивается отдельно. Для подъема
              крупногабаритных товаров вы должны найти помощника курьеру.
            </p>
            <p>Даты поставки указаны в календаре на главной странице сайта.</p>
          </div>
        </div>
        <div className="delivery__hero--img">
          <img src={deliveryPerson} alt="" />
        </div>
      </div>
      <div className="delivery__main grid md:grid-cols-[4fr_3fr]">
        <div className="delivery__main--img">
          <img src={deliveryCar} alt="" />
        </div>
        <div className="delivery__main--info text-[.9rem] font-light grid gap-4">
          <p className="font-bold">Доставка по Минску и Минскому р-ну</p>

          <p>
            Доставка по Минску осуществляется в течение 1-3 дней после поставки
            товаров на наш склад. За это время с вами связывается оператор и
            согласовывает комфортное для вас время получения заказа. В
            согласованный день курьер заранее уведомит о скором прибытии товара.
          </p>

          <p>
            Заказ будет доставлен в течение 1-5 рабочих дней после поставки
            товаров на наш склад. Вам позвонит оператор и согласует удобное для
            вас время. В день доставки курьер за час свяжется с вами и уведомит
            о точном времени прибытия товара.
          </p>
          <p>Доставка по Беларуси</p>
          <p>
            Сборка и погрузка товаров осуществляется сотрудниками магазина IKEA.
            Поэтому точную информацию о наличии выкупленных товаров мы узнаем
            после разгрузки машины на нашем складе в Минске.
          </p>
          <p>
            Из-за отсутствия некоторых позиций итоговая сумма заказа может
            уменьшиться. Если сумма отсутствующих товаров в заказе превышает 4
            000 рос. руб, то комиссия за заказ будет пересчитана в соответствии
            с тарифами, которые указаны в разделе "Оплата".
          </p>
        </div>
      </div>
      <div className="delivery__paragraphs grid md:grid-cols-2">
        <div className="text-[.94rem] grid gap-4 font-light">
          <p className="font-bold">
            Если некоторых позиций не оказалось в наличии
          </p>
          <p>
            Вы имеете право отказаться от какой-либо позиции в заказе, но при
            этом нами удерживается комиссия за доставку этого товара.
          </p>
          <p>
            Вы можете это сделать в течение 12 часов после оформления заказа
          </p>
          <p>
            Согласовывая доставку с оператором, вы обязуетесь ее принять. На
            каждую точку курьеру дается 10 мин. Если разгрузка не начинается в
            течение 5 мин с момента прибытия курьера к месту назначения, курьер
            следует дальше по маршруту. Все непринятые заказы отправляются на
            возврат в магазин IKEA. Чтобы получить непринятый заказ, вам
            необходимо еще раз его оформить на один из последующих рейсов. За
            нами остаётся право отказать вам в дальнейшем сотрудничестве..
          </p>
          <p>
            В течение часа проверьте комплектацию согласно акту сдачи-приемки
            услуг, а также каждую позицию на видимые повреждения и брак.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Delivery);
