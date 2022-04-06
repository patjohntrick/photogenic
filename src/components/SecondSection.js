import React from "react";
import ImageTwo from "../imgs/img2.jpg";

const SecondSection = () => {
  return (
    <section>
      <div className="image-container">
        <img src={ImageTwo} alt="" className=" object-cover h-[45vh] w-full" />
      </div>
      <div className="text-container bg-white h-[65vh] relative text-neutral-900">
        <div className="text-div text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full space-y-2 ">
          <p className=" font-oswald text-3xl font-bold w-[85%] m-auto text-neutral-900">
            CREATE AND SHARE YOUR PHOTO STORIES.
          </p>
          <p className=" font-heebo font-light text-neutral-900 w-[85%] m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard.
          </p>
          <div className="nav-contanct w-[90%] m-auto pt-3 pl-2">
            <a
              href=""
              className=" text-white bg-neutral-900 py-2 px-4 uppercase font-bold font-oswald "
            >
              get an invite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
