import SmallLink from "./link";

function Dropdown() {
  return (
    <div className="flex absolute w-full left-12 top-20 z-20">
      <div className="w-full flex flex-col gap-4 max-w-max">
        <SmallLink text="Pricing" />
        <SmallLink text="Features" />
        <div className="w-[100%] h-[2px] bg-primary opacity-50" />
        <SmallLink text="Log In" />
        <SmallLink text="Create Account" />
      </div>
    </div>
  )
}

export default Dropdown;
