import type { IconType } from "react-icons"

type Props = {
  Icon: IconType
  text: string
}

function Badge({ Icon, text }: Props) {
  return (
    <div className="px-2 py-1 rounded-full flex flex-row items-center border border-gray-500 gap-2 text-sm">
      <span className="text-primary text-sm sm:text-[16px]">
        <Icon />
      </span>
      <h1 className="text-sm sm:text-[16px] text-gray-400">{text}</h1>
    </div>

  )
}

export default Badge;
