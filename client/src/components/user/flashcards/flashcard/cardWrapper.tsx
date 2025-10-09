import type { Children } from "../../../../types/default";

function CardWrapper({
  children,
  className,
}: {
  children: Children;
  className?: string;
}) {
  return (
    <div
      className={
        "hover:border-primary border border-gray-500 rounded-lg h-48 flex flex-col items-center justify-center text-center absolute top-0 w-72 z-10 bg-[#171717] " +
        className
      }
    >
      {children}
    </div>
  );
}

export default CardWrapper;
