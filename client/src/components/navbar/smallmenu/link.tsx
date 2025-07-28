import { FaLongArrowAltRight } from "react-icons/fa";

function SmallLink({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center gap-2 text-black max-w-max font-semibold text-lg">
      <h1>{text}</h1>
      <FaLongArrowAltRight />
    </div>
  )
}

export default SmallLink;
