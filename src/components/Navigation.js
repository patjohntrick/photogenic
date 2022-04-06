import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Navigation = () => {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  console.log(navBar);
  return (
    <nav className=" w-full fixed bg-white z-50">
      <nav className="desktop-nav flex justify-between items-center m-auto min-h-[10vh] shadow px-4">
        <div className="logo">
          <p className=" text-xl font-bold uppercase font-oswald ">
            photogenic
          </p>
        </div>
        <div className="nav-links hidden">
          <ul>
            <li>gallery</li>
            <li>features</li>
            <li>pricing</li>
          </ul>
        </div>
        <div className="nav-contanct hidden">
          <a href="">get an invite</a>
        </div>
        <div className="nav-bar text-lg" onClick={handleNavBar}>
          <FaBars />
        </div>
      </nav>
      <nav
        className={
          navBar
            ? " m-auto text-right uppercase font-oswald font-semibold text-neutral-800 space-y-4 py-2 pb-4 shadow"
            : "hidden"
        }
      >
        <div className="nav-links">
          <ul className="space-y-2">
            <li className="px-4">gallery</li>
            <hr />
            <li className="px-4">features</li>
            <hr />
            <li className="px-4">pricing</li>
            <hr />
          </ul>
        </div>
        <div className="nav-contanct px-4">
          <a href="" className=" bg-neutral-900 text-neutral-300 py-2 px-4 ">
            get an invite
          </a>
        </div>
      </nav>
      <div
        className={
          navBar
            ? "overlay h-screen w-full bg-black/90 block absolute"
            : "hidden"
        }
      ></div>
    </nav>
  );
};

export default Navigation;
