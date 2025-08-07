import { LuCircleDollarSign } from "react-icons/lu";

function Badge() {
  return (
    <div className="px-2 py-1 text-gray-300 rounded-full flex flex-row items-center border border-gray-500 gap-2 text-sm">
      <span className="text-primary">
        <LuCircleDollarSign />
      </span>
      <h1>Pricing</h1>
    </div>
  )
}

export default Badge;
