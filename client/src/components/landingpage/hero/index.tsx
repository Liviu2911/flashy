import Header from "./header";
import HeaderLink from "./headerlink";

function Hero() {
  return (
    <div className="w-full gap-10 flex flex-col mt-10 z-20 items-center">
      <HeaderLink />
      <Header />
    </div>
  )
}

export default Hero;
