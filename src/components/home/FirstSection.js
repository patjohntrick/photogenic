import React from "react";
import ImgOne from "../../imgs/img4.jpg";

const FirstSection = () => {
  return (
    <section className=" md:flex lg:pt-6">
      <div className="image-container order-1 md:w-[60%] lg:w-full xl:h-[500px] ">
        <img
          src={ImgOne}
          alt=""
          className=" object-cover h-[50vh] w-full md:h-full"
        />
      </div>
      <div className="text-container bg-black text-white flex justify-center items-center h-[65vh] xl:h-[500px]  ">
        <div className="text-div text-white space-y-2 w-[85%] md:w-[70%] lg:w-[75%] xl:w-[70%] ">
          <p className=" font-oswald text-3xl font-bold m-auto">
            CREATE AND SHARE YOUR PHOTO STORIES.
          </p>
          <p className=" font-heebo font-thin text-neutral-400 m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard.
          </p>
          <div className="nav-contanct m-auto pt-3">
            <a
              href=""
              className=" bg-white text-black py-2 px-4 uppercase font-bold font-oswald shadow"
            >
              read stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
