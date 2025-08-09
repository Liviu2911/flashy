import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Socials() {
  return (
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

  )
}

export default Socials;
