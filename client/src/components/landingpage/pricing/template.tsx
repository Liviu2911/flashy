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
    <div className={`border border-gray-700 ${title === "Premium" ? "bg-gray-800" : "bg-black"} sm:w-72 w-64 rounded-lg p-4 sm:pb-16 pb-12 flex flex-col gap-4`}>
      <div className="flex flex-row justify-start">
        <span className="p-2 rounded-lg border border-gray-500 bg-gray-900 text-primary">
          <Icon />
        </span>
      </div>

      <h1 className="sm:text-lg text-gray-300">{title}</h1>

      <div className="flex flex-row gap-2 items-center justify-start">
        <h1 className="sm:text-2xl text-lg text-gray-300">${price}</h1>
        <h3 className="text-gray-400">/month</h3>
      </div>

      <div className="w-full flex items-center">
        <div className="sm:w-64 w-52 rounded-full h-[1px] bg-gray-700" />
      </div>

      <div className="flex flex-col gap-4">
        {features.map(f => (
          <div key={f + "feat"} className="flex flex-row gap-2 items-center">
            <span className="text-gray-200">
              <IoIosCheckmarkCircle />
            </span>
            <h1 className="text-gray-400">{f}</h1>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button className="sm:px-4 sm:py-2 px-2 py-1 rounded-4xl min-w-max border border-gray-500 absolute sm:bottom-5 bottom-4 hover:bg-gray-200 hover:text-gray-800 font-medium text-sm transition-all cursor-pointer">Get stared now</button>
      </div>
    </div>
  )
}

export default PricingTemplate;
