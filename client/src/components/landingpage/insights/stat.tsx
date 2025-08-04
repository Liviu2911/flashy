import type { IconType } from "react-icons";

type Props = {
  Icon: IconType
  numbers: string
  text: string
}

function Stat({ Icon, numbers, text }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="text-gray-400 text-4xl">
        <Icon />
      </span>
      <h1 className="text-5xl font-bold text-gray-200">{numbers}</h1>
      <h1 className="text-gray-400">{text}</h1>
    </div>
  )
}

export default Stat;
