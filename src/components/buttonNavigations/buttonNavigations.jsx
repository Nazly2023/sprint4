import React from "react";
import "./buttonNavigations.scss";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiClockCounterClockwiseThin, PiUser } from "react-icons/pi";

const ButtonNavigations = () => {
  return (
    <div className="flex relative w-[323px] h-[37px] top-[170px] left-[34px] bg-transparent">
      <IoHomeOutline className="flex absolute w-8 h-8 left-0" />
      <IoIosSearch className="flex absolute w-[26px] h-[26px] left-[100px]" />
      <PiClockCounterClockwiseThin className="flex absolute w-8 h-8 left-[194px]" />
      <PiUser className="flex absolute w-8 h-8 left-[291px]" />
    </div>
  );
};

export default ButtonNavigations;
