import Bottom from "./bottom";
import Links from "./links";
import Socials from "./socials";

function Footer() {
  return (
    <div className="mt-12 flex w-full justify-center mb-16">
      <footer className="footer-shadow w-[80%] relative py-8 px-20 min-h-32 rounded-lg border flex flex-col gap-8 border-gray-500">
        <div className="w-full flex flex-row justify-between px-4">

          <div className="flex flex-col gap-8">
            <h1 className="text-lg text-gray-200 font-semibold">Flashy</h1>
            <h3 className="w-[85%]">Small daily steps can lead to big, unforgettable learning gains.</h3>
            <Socials />
          </div>

          <Links />
        </div>

        <div className="flex w-full justify-center">
          <div className="w-[100%] h-[1px] bg-gray-500" />
        </div>

        <Bottom />
      </footer>
    </div>
  )
}

export default Footer;
