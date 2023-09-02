import React, { useEffect, useState } from "react";
import currentTime from "../../services/currentTime.js";
const HeaderMobile = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {}, []);

  return <div>currentTime();</div>;
};

export default HeaderMobile;
