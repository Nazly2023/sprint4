import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const DetailDishes = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "yellow" }}>
        <FaMapMarkerAlt />
      </IconContext.Provider>
    </div>
  );
};

export default DetailDishes;
