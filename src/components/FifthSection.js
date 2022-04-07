import React from "react";
import responsive from "../imgs/responsive-icon.png";
import photo from "../imgs/photo-icon.png";
import multimedia from "../imgs/multimedia-icon.png";

const FifthSection = () => {
  return (
    <section className=" lg:grid lg:grid-cols-3 lg:w-[1024px] lg:m-auto ">
      <div className="responsive-container w-[300px] m-auto py-12 space-y-6">
        <div className="img-container">
          <img
            src={responsive}
            alt=""
            className="m-auto object-cover scale-125"
          />
        </div>
        <div className="text-container text-center text-neutral-900 space-y-2 ">
          <p className=" font-bold capitalize">100% responsive</p>
          <p className=" font-light  ">
            No matter which the device you're on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>

      <div className="photo-container w-[300px] m-auto pb-12 lg:pb-0 space-y-6">
        <div className="img-container">
          <img src={photo} alt="" className="m-auto object-cover scale-125" />
        </div>
        <div className="text-container text-center text-neutral-900 space-y-2  ">
          <p className=" font-bold capitalize">no photo limit</p>
          <p className=" font-light  ">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
      </div>

      <div className="photo-container w-[300px] m-auto pb-12 lg:pb-0 space-y-6">
        <div className="img-container">
          <img
            src={multimedia}
            alt=""
            className="m-auto object-cover scale-125"
          />
        </div>
        <div className="text-container text-center text-neutral-900 space-y-2  ">
          <p className=" font-bold capitalize">Available to embed</p>
          <p className=" font-light  ">
            Embed Tweets, Facebook posts, lnstagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
