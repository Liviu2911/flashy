import pricing from "../../../assets/json/pricing.json" assert { type: "module" };
import Badge from "./badge";
import PricingTemplate from "./template";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import { BiCrown } from "react-icons/bi";

function Pricing() {
  return (
    <div className="flex flex-col gap-6 items-center w-full relative z-40 mt-20">
      <Badge />
      <div className="flex relative z-20 flex-col gap-2 items-center">
        <h1 className="text-4xl font-bold flex flex-row items-center gap-2">
          Choose your plan
        </h1>
        <h3 className="text-gray-400 text-xl font-medium text-center">
          Explore our flexible pricing designed for every type of user
        </h3>
      </div>

      <div className="w-full flex flex-row gap-12 justify-center">
        <PricingTemplate Icon={TbCurrencyDollarOff} title="Free" price={0} features={pricing.free} />
        <PricingTemplate Icon={RiVipDiamondLine} title="Standard" price={4.99} features={pricing.standard} />
        <PricingTemplate Icon={BiCrown} title="Premium" price={9.99} features={pricing.premium} />
      </div>
    </div>
  )
}

export default Pricing;
