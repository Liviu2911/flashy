import { useEffect, useState } from "react";
import img1 from "../../../assets/form1.jpg";
import img2 from "../../../assets/form2.jpg";
import img3 from "../../../assets/form3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Slide from "./slide";
import { Link } from "@tanstack/react-router";

function FormImage() {
  const imgs = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[450px] h-[660px] relative py-6 overflow-hidden">
      <img
        alt="carousel image"
        src={imgs[current]}
        className="z-10 rounded-xl absolute w-full h-full top-0 left-0"
      />

      <div className="w-full px-6 flex flex-row justify-between z-20 relative">
        <h1 className="text-white font-medium text-lg">Flashy</h1>
        <Link
          to="/"
          className="flex flex-row hover:opacity-90 transition-all items-center gap-2 bg-buttonbg px-4 py-2 rounded-full text-sm"
        >
          Back to website
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>

      <div className="flex flex-row items-center z-20 justify-center gap-4 absolute bottom-6 w-full">
        <Slide active={current === 0} />
        <Slide active={current === 1} />
        <Slide active={current === 2} />
      </div>
    </div>
  );
}

export default FormImage;
