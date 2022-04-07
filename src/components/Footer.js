import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaRedditAlien,
  FaGithubAlt,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className=" bg-neutral-900 py-12 space-y-4 text-center text-neutral-300 lg:grid lg:grid-cols-3">
      <div className="logo-links-container space-y-4 mb-12">
        <div className="logo">
          <p className=" text-xl font-bold uppercase font-oswald  text-center ">
            photogenic
          </p>
        </div>
        <div className="links flex  justify-center space-x-2 text-xl">
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

      <div className="nav-links uppercase ">
        <ul className="space-y-2 text-sm">
          <li>home</li>
          <li>gallery</li>
          <li>features</li>
          <li>pricing</li>
          <div className="invite-button pt-8 pb-6">
            <a
              href=""
              className="bg-neutral-200 text-neutral-900 py-2 px-4 uppercase font-bold font-oswald shadow"
            >
              get a invite
            </a>
          </div>
        </ul>
      </div>

      <div className="footer-tet font-thin">
        <form className="send">
          <p>have a question?</p>
          <input type="email" placeholder="Email" />
          <button type="submit">submit</button>
        </form>
        <p>Copyright {year}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
