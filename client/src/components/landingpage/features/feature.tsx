import type { IconType } from "react-icons"

type Props = {
  Icon: IconType
  title: string
  description: string
  color: string
}

function Feature({ Icon, title, description, color }: Props) {
  return (
    <div className="h-48 border border-gray-500 bg-gray-950 p-4 rounded-lg flex flex-col gap-6">
      <div className="w-full flex flex-row justify-start">
        <span className={`rounded ${color} text-gray-200 p-2 text-lg`}>
          <Icon />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-gray-200 font-medium text-lg">{title}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default Feature;
