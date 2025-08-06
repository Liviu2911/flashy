import { MdDone } from "react-icons/md";

type Props = {
  title: string
  price: number
  features: string[]
}

function Template({ title, price, features }: Props) {
  return (
    <div className="flex rounded-lg border border-gray-400 p-4 flex-col gap-4 items-center w-52">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-300">{title}</h1>
        <h3 className="text-gray-500 font-medium">${price}/month</h3>
      </div>

      <div className="flex flex-col gap-2">
        {features.map(feature => (
          <div key={feature + title} className="flex flex-row gap-2 items-center text-sm">
            <span className="text-gray-500">
              <MdDone />
            </span>
            <h1 className="text-gray-400">{feature}</h1>
          </div>
        ))}
      </div>

      {title === "PREMIUM" && (
        <button className="py-1 px-4 rounded bg-primary font-medium text-sm hover:opacity-90 text-gray-200 cursor-pointer transition-all">Subscribe Now</button>
      )}
    </div>
  )
}

export default Template;
