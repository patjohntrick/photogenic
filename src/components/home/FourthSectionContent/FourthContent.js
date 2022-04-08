import React from "react";
import { BsArrowUp } from "react-icons/bs";
import Img from "../../../imgs/img14.jpg";

const FourthContent = () => {
  return (
    <section>
      <div className="container relative">
        <div className="img-container overflow-hidden">
          <img
            src={Img}
            alt=""
            className=" h-[50vh] w-full object-cover transition-all"
          />
        </div>
        <div className="text-container absolute h-full w-full flex items-end top-0 z-20 text-neutral-300 py-4 px-6 ">
          <div className="text w-full">
            <div className="text py-2  border-b-[1px] border-white/20">
              <p className="  font-semibold ">Memorable Ceremony</p>
              <p className=" text-sm font-light">
                by <span>Anemone Hailey</span>
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

export default FourthContent;
