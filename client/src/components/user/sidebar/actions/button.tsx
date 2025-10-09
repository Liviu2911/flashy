import type { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  text: string;
};

function Button({ Icon, text }: Props) {
  return (
    <div className="flex items-center gap-4 px-4 py-1 rounded text-gray-300 hover:bg-gray-700 transition-all">
      <span className="text-sm text-primary opacity-75">
        <Icon />
      </span>
      <h1>{text}</h1>
    </div>
  );
}

export default Button;
