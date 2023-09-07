import React from "react";
import Home from "../pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailRestaurant from "../pages/detailRestaurant/detailRestaurant";
import Search from "../pages/search/search";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<DetailRestaurant />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
