import React from "react";
import ImageTwo from "../imgs/img2.jpg";

const SecondSection = () => {
  return (
    <section className=" md:flex lg:w-[1024px] lg:m-auto">
      <div className="image-container md:w-[70%]">
        <img
          src={ImageTwo}
          alt=""
          className=" object-cover h-[45vh] w-full md:h-full"
        />
      </div>
      <div className="text-container bg-white flex justify-center items-center h-[65vh]">
        <div className="text-div text-white w-[85%] space-y-2 ">
          <p className=" font-oswald text-3xl font-bold m-auto text-neutral-900 uppercase">
            beautiful stories everytime.
          </p>
          <p className=" font-heebo font-light text-neutral-900  m-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC
          </p>
          <div className="nav-contanct m-auto pt-3 ">
            <a
              href=""
              className=" text-white bg-neutral-900 py-2 px-4 uppercase font-bold font-oswald "
            >
              read stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
