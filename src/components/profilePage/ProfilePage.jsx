import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <section className="wrapper">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-8">Profile</h1>
        <div className="buttons flex gap-3">
          <Link to="/profilePage/user">
            <button className="btn btn-success text-slate-100">Admin</button>
          </Link>
          <Link to={"/profilePage/users"}>
            <button className="btn btn-info">Users</button>
          </Link>
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default ProfilePage;
