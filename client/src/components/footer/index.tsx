import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mt-12 flex w-full justify-center mb-16">
      <footer className="footer-shadow w-[80%] relative py-8 px-20 min-h-32 rounded-lg border flex flex-col gap-8 border-gray-500">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="text-lg text-gray-200 font-semibold">Flashy</h1>
            <h3 className="w-[85%]">Small daily steps can lead to big, unforgettable learning gains.</h3>

            <div className="flex text-lg flex-row gap-3 items-center">
              <button>
                <FaInstagram />
              </button>
              <button>
                <FaFacebook />
              </button>
              <button>
                <FaXTwitter />
              </button>
              <button>
                <FaLinkedin />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-2 h-full justify-center">
              <button>Contact</button>
              <button>Support</button>
            </div>

            <div className="flex flex-col gap-2 h-full justify-center">
              <button>About</button>
              <button>Tutorials</button>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="w-[100%] h-[1px] bg-gray-500" />
        </div>

        <div className="flex flex-row items-center justify-between">
          <h1 className="text-gray-400">@ 2025 Flashy. All rights reserved.</h1>

          <div className="flex flex-row items-center gap-3 text-gray-400 underline">
            <button>Privacy Policy</button>
            <button>Terms of use</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
