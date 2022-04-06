import React from "react";
import ImgOne from "../imgs/img4.jpg";

const FirstSection = () => {
  return (
    <section>
      <div className="image-container">
        <img src={ImgOne} alt="" className=" object-cover h-[50vh] w-full" />
      </div>
      <div className="text-container bg-black h-[65vh] relative text-neutral-300">
        <div className="text-div text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full space-y-2 ">
          <p className=" font-oswald text-3xl font-bold w-[85%] m-auto">
            CREATE AND SHARE YOUR PHOTO STORIES.
          </p>
          <p className=" font-heebo font-thin text-neutral-400 w-[85%] m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard.
          </p>
          <div className="nav-contanct w-[90%] m-auto pt-3 pl-2">
            <a
              href=""
              className=" bg-neutral-200 text-neutral-900 py-2 px-4 uppercase font-bold font-oswald "
            >
              get an invite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
