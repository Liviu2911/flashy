import pricing from "../../../assets/json/pricing.json" assert { type: "module" };
import Badge from "../../badge";
import PricingTemplate from "./template";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import { BiCrown } from "react-icons/bi";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";

function Pricing() {
  const [current, setCurrent] = useState(1);
  const isMobile = window.innerWidth < 640;

  return (
    <div className="flex flex-col sm:gap-6 gap-3 items-center w-full relative z-40 sm:mt-32 -mt-10">
      <Badge Icon={LuCircleDollarSign} text="Pricing" />

      <div className="flex relative z-20 flex-col gap-2 items-center">
        <h1 className="sm:text-4xl text-2xl font-bold flex flex-row items-center gap-2">
          Choose your plan
        </h1>
        <h3 className="text-gray-400 sm:text-xl sm:w-full w-[85%] font-medium text-center">
          Explore our flexible pricing designed for every type of user
        </h3>
      </div>

      {/* <div className="w-full sm:flex hidden flex-row gap-12 justify-center">
        <PricingTemplate Icon={TbCurrencyDollarOff} title="Free" price={0} features={pricing.free} />
        <PricingTemplate Icon={RiVipDiamondLine} title="Standard" price={4.99} features={pricing.standard} />
        <PricingTemplate Icon={BiCrown} title="Premium" price={9.99} features={pricing.premium} />
      </div> */}

      <div className="flex flex-row gap-8 relative w-full">

        <div className="sm:hidden">
          <button onClick={() => setCurrent(prev => prev > 0 ? prev - 1 : prev)} className="z-50 absolute left-10 text-xl top-64">
            <FaArrowLeftLong />
          </button>
          <button onClick={() => setCurrent(prev => prev < 2 ? prev + 1 : prev)} className="z-50 absolute right-10 text-xl top-64">
            <FaArrowRightLong />
          </button>
        </div>

        <div className="flex w-full justify-center">
          <div className="overflow-hidden sm:overflow-visible w-[280px] sm:h-auto h-[100vh] relative">
            <div className="absolute sm:relative sm:w-full flex flex-row sm:gap-12 sm:justify-center gap-8 transition-all" style={{ left: isMobile ? -current * (64 * 4 + 32) : 0 }}>
              <PricingTemplate Icon={TbCurrencyDollarOff} title="Free" price={0} features={pricing.free} />
              <PricingTemplate Icon={RiVipDiamondLine} title="Standard" price={4.99} features={pricing.standard} />
              <PricingTemplate Icon={BiCrown} title="Premium" price={9.99} features={pricing.premium} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing;
