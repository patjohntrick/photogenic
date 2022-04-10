import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  console.log(navBar);
  return (
    <nav className=" w-full fixed bg-white z-50 shadow ">
      <nav className="desktop-nav flex justify-between items-center m-auto min-h-[10vh] shadow px-4 lg:w-[900px] lg:shadow-none xl:w-[1000px] xl:m-auto">
        <div className="logo">
          <Link
            to="/"
            className=" text-xl lg:text-2xl font-bold uppercase font-oswald "
            onClick={() => setNavBar(false)}
          >
            photogenic
          </Link>
        </div>
        <div className="nav-links hidden md:block">
          <ul className="flex font-bold text-sm uppercase space-x-6 text-neutral-900 items-center">
            <Link to="/gallery">gallery</Link>
            <Link to="/features">features</Link>
            <Link to="/pricing">pricing</Link>
          </ul>
        </div>
        <div className="nav-contanct hidden md:block">
          <a
            href=""
            className=" bg-black font-oswald text-white py-2 px-4 uppercase font-bold shadow "
          >
            get an invite
          </a>
        </div>
        <div className="nav-bar text-lg md:hidden" onClick={handleNavBar}>
          <FaBars />
        </div>
      </nav>
      <nav
        className={
          navBar
            ? " m-auto text-right uppercase font-semibold text-neutral-800 space-y-4 py-2 pb-4 shadow md:hidden"
            : "hidden md:hidden"
        }
      >
        <div className="nav-links">
          <ul className="space-y-2">
            <Link to="/gallery" className="px-4" onClick={handleNavBar}>
              gallery
            </Link>
            <hr />
            <Link to="/features" className="px-4" onClick={handleNavBar}>
              features
            </Link>
            <hr />
            <Link to="/pricing" className="px-4" onClick={handleNavBar}>
              pricing
            </Link>
            <hr />
          </ul>
        </div>
        <div className="nav-contanct px-4">
          <a
            href=""
            className=" bg-neutral-900 font-oswald text-neutral-300 py-2 px-4 "
          >
            get an invite
          </a>
        </div>
      </nav>
      <div
        className={
          navBar
            ? "overlay h-screen w-full bg-black/90 absolute opacity-100 transition-all md:opacity-0"
            : " transition-all opacity-0 md:opacity-0"
        }
      ></div>
    </nav>
  );
};

export default Navigation;
