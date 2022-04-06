import React from "react";
import { BsArrowUp } from "react-icons/bs";
import Img from "../../imgs/img9.jpg";

const FourthSection = () => {
  return (
    <section>
      <div className="container relative">
        <div className="img-container">
          <img src={Img} alt="" className=" h-[50vh] w-full object-cover" />
        </div>
        <div className="text-container absolute h-full w-full flex items-end top-0 z-20 text-neutral-300 py-4 px-6 ">
          <div className="text w-full">
            <div className="text py-2  border-b-[1px] border-white/20">
              <p className=" text-xl font-semibold ">Mountain Stories</p>
              <p className=" text-sm font-light">
                by <span>John Patrick</span>
              </p>
            </div>

            <a
              href=""
              className="flex items-center uppercase text-sm font-md mt-2"
            >
              read more{" "}
              <span className=" ml-2 text-base">
                <BsArrowUp className="rotate-90" />
              </span>
            </a>
          </div>
        </div>
        <div className="overlay absolute top-0 w-full h-full bg-gradient-to-t from-black/100 to-black/5 z-10 "></div>
      </div>
    </section>
  );
};

export default FourthSection;
