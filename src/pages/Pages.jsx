import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Delivery from "../components/delivery/Delivery";
import Contact from "../components/contact/Contact";
import NotFound from "../components/404/404";
import Product from "../components/product/Product";
import Category from "../components/category/Category";
import Profile from "../components/profile/Profile";
import ProfilePage from "../components/profilePage/ProfilePage";
import Users from "../components/users/Users";
import User from "../components/user/User";
import Protect from "../components/protect/Protect";

const Pages = () => {
  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-900 duration-200">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<Category />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Protect />}>
          <Route path="profilePage" element={<ProfilePage />}>
            <Route path="users" element={<Users />} />
            <Route path="user" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
