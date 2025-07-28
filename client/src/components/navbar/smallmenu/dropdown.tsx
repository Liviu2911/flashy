import SmallLink from "./link";

function Dropdown() {
  return (
    <div className="flex absolute w-full left-0 justify-center top-24 z-20">
      <div className="w-full flex flex-col gap-4 max-w-max">
        <SmallLink text="Pricing" />
        <SmallLink text="Features" />
        <SmallLink text="Log In" />
        <SmallLink text="Create Account" />
      </div>
    </div>
  )
}

export default Dropdown;
