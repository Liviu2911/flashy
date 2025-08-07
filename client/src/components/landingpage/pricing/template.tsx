import type { IconType } from "react-icons";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Props = {
  Icon: IconType
  title: string
  price: number
  features: string[]
}

function PricingTemplate({ Icon, title, price, features }: Props) {
  return (
    <div className={`border border-gray-700 ${title === "Premium" ? "bg-gray-800" : "bg-black"} w-72 rounded-lg p-4 pb-16 flex flex-col gap-4`}>
      <div className="flex flex-row justify-start">
        <span className="p-2 rounded-lg border border-gray-500 bg-gray-900 text-primary">
          <Icon />
        </span>
      </div>

      <h1 className="text-lg text-gray-300">{title}</h1>

      <div className="flex flex-row gap-2 items-center justify-start">
        <h1 className="text-2xl text-gray-300">${price}</h1>
        <h3 className="text-gray-400">/month</h3>
      </div>

      <div className="w-full flex items-center">
        <div className="w-64 rounded-full h-[1px] bg-gray-700" />
      </div>

      <div className="flex flex-col gap-4">
        {features.map(f => (
          <div className="flex flex-row gap-2 items-center">
            <span className="text-gray-200">
              <IoIosCheckmarkCircle />
            </span>
            <h1 className="text-gray-400">{f}</h1>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button className="px-4 py-2 rounded-full border border-gray-500 absolute bottom-5 hover:bg-gray-200 hover:text-gray-800 font-medium text-sm transition-all cursor-pointer">Get stared now</button>
      </div>
    </div>
  )
}

export default PricingTemplate;
