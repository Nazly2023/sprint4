import React from "react";
import Home from "../pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantDetails from "../pages/detailRestaurant/detailRestaurant";
import Search from "../pages/search/search";
import Profile from "../pages/profile/profile";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path = '/*' element = {<Slider/>} />  */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant-details" element={<RestaurantDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
