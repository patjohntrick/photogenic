import React from "react";
import ImgThree from "../../imgs/img1.jpg";

const ThirdSection = () => {
  return (
    <section className=" md:flex">
      <div className="image-container order-1 md:w-[70%] lg:w-full xl:h-[500px]">
        <img
          src={ImgThree}
          alt=""
          className=" object-cover h-[45vh] w-full md:h-full"
        />
      </div>
      <div className="text-container bg-white flex justify-center items-center h-[65vh] xl:h-[500px]">
        <div className="text-div text-white w-[85%] space-y-2 md:w-[70%] lg:w-[75%] xl:w-[70%]">
          <p className=" font-oswald text-3xl font-bold m-auto text-neutral-900 uppercase">
            designed for everyone.
          </p>
          <p className=" font-heebo font-light text-neutral-900  m-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
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

export default ThirdSection;
