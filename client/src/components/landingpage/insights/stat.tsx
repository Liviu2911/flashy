import type { IconType } from "react-icons";

type Props = {
  Icon: IconType
  numbers: string
  text: string
}

function Stat({ Icon, numbers, text }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="text-gray-400 sm:text-4xl text-xl">
        <Icon />
      </span>
      <h1 className="sm:text-5xl text-2xl font-bold text-gray-200">{numbers}</h1>
      <h1 className="text-gray-400 sm:text-[16px] text-sm">{text}</h1>
    </div>
  )
}

export default Stat;
