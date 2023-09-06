import React from "react";
import "./mainHome.scss";
import aromat from "../../assets/aromat.png";
import glamour from "../../assets/glamour.png";
import kafe from "../../assets/kafe.png";
import pardes from "../../assets/pardes.png";
import start4 from "../../assets/Stars4.png";
import start3 from "../../assets/stars3.png";
import start5 from "../../assets/Stars5.png";

const MainHome = () => {
  return (
    <div>
      <section className="flex relative w-[348px] h-[106px] top-[110px] left-4 rounded-[10px] bg-white mb-4">
        <img
          src={pardes}
          className="flex absolute w-[134px] h-[108.02px] top-0 left-[1px]"
        />
        <h3 className="flex absolute w-[110px] h-4 top-[8px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Pardes Restaurant
        </h3>
        <img
          src={start4}
          alt="stars"
          className="flex absolute left-[147px] w-[68px] h-3 top-[30px]"
        />
        <p className="flex absolute w-[139px] h-4 top-[50px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Work time 09:30 - 23:00
        </p>
        <p className="flex absolute w-[57px] h-3 top-[70px] text-[10px] leading-[11.72px] tracking-[-0.3px] text-center text-[#a7a7a7] left-[147px]">
          Before you <span className="cost text-[#414141] ml-[2.5px]">4$</span>
        </p>
      </section>
      <section className="flex relative w-[348px] h-[106px] top-[110px] left-4 rounded-[10px] bg-white mb-4">
        <img
          src={glamour}
          className="flex absolute w-[134px] h-[108.02px] top-0 left-[1px]"
        />
        <h3 className="flex absolute w-[110px] h-4 top-[8px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Glamour Kafe
        </h3>
        <img
          src={start3}
          alt="stars"
          className="flex absolute left-[147px] w-[68px] h-3 top-[30px]"
        />
        <p className="flex absolute w-[139px] h-4 top-[50px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Work time 09:00 - 21:00
        </p>
        <p className="flex absolute w-[70px] h-3 top-[70px] text-[10px] leading-[11.72px] tracking-[-0.3px] text-center text-[#a7a7a7] left-[148px]">
          Before you <span className="cost text-[#414141] ml-[2.5px]">13$</span>
        </p>
      </section>
      <section className="flex relative w-[348px] h-[106px] top-[110px] left-4 rounded-[10px] bg-white mb-4">
        <img
          src={aromat}
          className="flex absolute w-[134px] h-[108.02px] top-0 left-[1px]"
        />
        <h3 className="flex absolute w-[110px] h-4 top-[8px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Aromat Bakery
        </h3>
        <img
          src={start5}
          alt="stars"
          className="flex absolute left-[147px] w-[68px] h-3 top-[30px]"
        />
        <p className="flex absolute w-[139px] h-4 top-[50px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Work time 09:30 - 22:00
        </p>
        <p className="flex absolute w-[57px] h-3 top-[70px] text-[10px] leading-[11.72px] tracking-[-0.3px] text-center text-[#a7a7a7] left-[147px]">
          Before you <span className="cost text-[#414141] ml-[2.5px]">3$</span>
        </p>
      </section>
      <section className="flex relative w-[348px] h-[106px] top-[110px] left-4 rounded-[10px] bg-white">
        <img
          src={kafe}
          className="flex absolute w-[134px] h-[108.02px] top-0 left-[1px]"
        />
        <h3 className="flex absolute w-[178px] h-4 top-[8px] left-[146px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Last night Restaurant & Kafe
        </h3>
        <img
          src={start4}
          alt="stars"
          className="flex absolute left-[147px] w-[68px] h-3 top-[30px]"
        />
        <p className="flex absolute w-[139px] h-4 top-[50px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
          Work time 10:00 - 22:00
        </p>
        <p className="flex absolute w-[57px] h-3 top-[70px] text-[10px] leading-[11.72px] tracking-[-0.3px] text-center text-[#a7a7a7] left-[147px]">
          Before you <span className="cost text-[#414141] ml-[2.5px]">5$</span>
        </p>
      </section>
    </div>
  );
};

export default MainHome;
