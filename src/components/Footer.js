import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaRedditAlien,
  FaGithubAlt,
} from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className=" bg-black">
      <div className="footer-container  py-12 space-y-4 text-center text-white lg:grid lg:grid-cols-3 lg:space-y-0 lg:w-[1000px] xl:w-[1100px] lg:m-auto">
        <div className="logo-links-container space-y-4 mb-12 lg:flex lg:justify-between lg:flex-col lg:mb-0 lg:space-y-0 ">
          <div className="logo">
            <p className=" text-xl font-bold uppercase font-oswald  text-center lg:text-2xl ">
              photogenic
            </p>
          </div>
          <div className="links flex justify-center space-x-2 text-xl">
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaRedditAlien />
            </a>
            <a href="">
              <FaGithubAlt />
            </a>
          </div>
        </div>

        <div className="nav-links uppercase  lg:flex lg:justify-between lg:flex-col ">
          <ul className="space-y-2 text-sm font-semibold">
            <li>home</li>
            <li>gallery</li>
            <li>features</li>
            <li>pricing</li>
            <div className="invite-button pt-8 pb-12 lg:pb-0">
              <a
                href=""
                className="bg-white text-neutral-900 py-2 px-4 uppercase font-bold font-oswald shadow text-base"
              >
                get a invite
              </a>
            </div>
          </ul>
        </div>

        <div className="footer-tet font-thin flex justify-between flex-col">
          <form className="send space-y-2 mb-10 lg:mb-0">
            <p className=" uppercase font-black text-xl ">have a question?</p>
            <div className=" flex justify-center items-center ">
              <input
                type="email"
                placeholder="Email"
                className=" p-2 border-none outline-none text-neutral-900"
              />
              <button
                type="submit"
                className=" uppercase bg-white text-neutral-900 text-md h-full py-3 px-2 font-semibold "
              >
                <AiOutlineSend />
              </button>
            </div>
          </form>
          <p>Copyright {year}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
