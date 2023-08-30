import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Location = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "yellow" }}>
        <FaMapMarkerAlt />
      </IconContext.Provider>
      <strong className="text-{#ffe031}">deliver to</strong>
      <span>882 Well St. New-York</span>
    </div>
  );
};

export default Location;
