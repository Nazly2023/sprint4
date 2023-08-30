import React from "react";
import Header from "../../components/header/header";
import Stories from "../../components/stories/stories";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import currentTime from "../../services/currentTime";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#ffbc74] w-[428px] h-[926px] top-[-464px] left-[-214px] rounded-[35px]">
      <div className="timeCurrent" id="hour">
        {currentTime}
      </div>
      <Header />
      <Stories />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
