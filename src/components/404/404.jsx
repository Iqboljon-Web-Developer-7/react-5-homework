import React, { memo } from "react";

import img from "../../assets/404-img.png";

const notFound = () => {
  return (
    <section className="wrapper mx-auto py-10">
      <h1 className="text-3xl text-center dark:text-slate-300">
        <span className="text-red-600">ERROR:</span> 404
      </h1>
      <img src={img} alt="server cound't found item" />
    </section>
  );
};

export default memo(notFound);
