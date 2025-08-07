import { LuCircleDollarSign } from "react-icons/lu";

function Badge() {
  return (
    <div className="px-2 py-1 text-gray-300 rounded-full flex flex-row items-center border border-gray-500 gap-2 text-sm">
      <span className="text-primary text-sm sm:text-[16px]">
        <LuCircleDollarSign />
      </span>
      <h1 className="text-sm sm:text-[16px]">Pricing</h1>
    </div>
  )
}

export default Badge;
