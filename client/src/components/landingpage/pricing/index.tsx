import Template from "./template";
import pricing from "../../../assets/json/pricing.json" assert { type: "module" };

function Pricing() {
  return (
    <div className="flex flex-col items-center w-full gap-8 relative z-40 mt-40">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-bold">Pricing for everyone</h1>
        <h3 className="text-gray-400 text-xl font-medium w-[75%] text-center">Start free and upgrade as you grow. Both plans include our core features.</h3>
      </div>
      <div className="flex flex-row gap-12">
        <Template title="FREE" price={0} features={pricing.free} />
        <Template title="PREMIUM" price={9.99} features={pricing.premium} />
      </div>
    </div>
  )
}

export default Pricing;
