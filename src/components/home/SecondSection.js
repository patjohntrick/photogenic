import React from "react";
import ImageTwo from "../../imgs/img2.jpg";

const SecondSection = () => {
  return (
    <section className=" md:flex">
      <div className="image-container md:w-[70%] lg:w-full xl:h-[500px]">
        <img
          src={ImageTwo}
          alt=""
          className=" object-cover h-[45vh] w-full md:h-full"
        />
      </div>
      <div className="text-container bg-white flex justify-center items-center h-[65vh] xl:h-[500px]">
        <div className="text-div text-white w-[85%] space-y-2 md:w-[70%] lg:w-[75%] xl:w-[70%] ">
          <p className=" font-oswald text-3xl font-bold m-auto text-black uppercase">
            beautiful stories everytime.
          </p>
          <p className=" font-heebo font-light text-black  m-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC
          </p>
          <div className="nav-contanct m-auto pt-3 ">
            <a
              href=""
              className=" text-white bg-black py-2 px-4 uppercase font-bold font-oswald "
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
