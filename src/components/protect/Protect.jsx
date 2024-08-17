import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const Protect = () => {
  let user = "1212";

  return (
    <section className="wrapper dark:text-slate-100 my-10">
      {user ? <Outlet /> : <h2>Not Registered</h2>}
    </section>
  );
};

export default memo(Protect);
