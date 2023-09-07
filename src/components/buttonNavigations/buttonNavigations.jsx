import React from "react";
import "./buttonNavigations.scss";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiClockCounterClockwiseThin, PiUser } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const ButtonNavigations = () => {
  const detailRest = useNavigate();
  function redirectSearch(e) {
    e.preventDefault();
    detailRest("/search");
  }
  return (
    <div className="flex w-[323px] h-[37px] bottom-0 left-[34px] bg-transparent absolute top-[800px]">
      <IconContext.Provider value={{ color: "yellow" }}>
        <IoHomeOutline className="flex absolute w-8 h-8 left-0" />
      </IconContext.Provider>
      <IoIosSearch
        className="flex absolute w-[26px] h-[26px] left-[100px] cursor-pointer"
        onClick={redirectSearch}
      />
      <PiClockCounterClockwiseThin className="flex absolute w-8 h-8 left-[194px] cursor-pointer" />
      <PiUser className="flex absolute w-8 h-8 left-[291px] cursor-pointer" />
    </div>
  );
};

export default ButtonNavigations;
