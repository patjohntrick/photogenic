import React from "react";

const Second = ({ pricing, setPricing }) => {
  const handlePricing = () => {
    setPricing(!pricing);
  };
  console.log(pricing);
  return (
    <section className="my-12">
      <div className="range-container flex justify-center space-x-2 items-center font-bold mb-8 text-sm">
        <p>Monthly</p>
        <div
          className={
            pricing
              ? "bg-black border-[1px] border-black w-[40px] rounded-full p-[2px] cursor-pointer"
              : "bg-white border-[1px] border-black w-[40px] rounded-full p-[2px] cursor-pointer"
          }
          onClick={handlePricing}
        >
          <div
            className={
              "circle w-[15px] h-[15px] rounded-full bg-black transition-all " +
              (pricing ? "ml-[19px] bg-white" : "ml-0")
            }
          ></div>
        </div>
        <p>Yearly</p>
      </div>

      <div className="pricing-container space-y-8 md:w-[650px] md:m-auto  md:space-y-0 md:flex md:flex-wrap md:gap-6 lg:w-[950px] xl:w-[1000px] ">
        <div className="box-container w-[300px] m-auto shadow-lg space-y-4 px-6 py-8 bg-neutral-100">
          <header className=" flex justify-between items-center ">
            <p className=" capitalize text-lg font-bold ">basic</p>
            <p className=" font-bold text-2xl font-oswald ">
              <span className={pricing ? "hidden" : "block"}>P129.00</span>{" "}
              <span className={pricing ? "block" : "hidden"}>P1,419.00</span>
            </p>
          </header>
          <p className="font-light text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className=" flex justify-center ">
            <button className=" text-white bg-black py-2 w-full uppercase font-semibold text-sm ">
              get now
            </button>
          </div>
        </div>

        <div className="box-container w-[300px] m-auto shadow-lg space-y-4 px-6 py-8 bg-black text-white lg:scale-110 ">
          <header className=" flex justify-between items-center ">
            <p className=" capitalize text-lg font-bold ">pro</p>
            <p className=" font-bold text-2xl font-oswald ">
              <span className={pricing ? "hidden" : "block"}>P329.00</span>{" "}
              <span className={pricing ? "block" : "hidden"}>P3,619.00</span>
            </p>
          </header>
          <p className=" text-center font-thin text-neutral-300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </p>
          <div className=" flex justify-center ">
            <button className=" text-black bg-white py-2 w-full uppercase font-semibold text-sm ">
              get now
            </button>
          </div>
        </div>

        <div className="box-container w-[300px] m-auto shadow-lg space-y-4 px-6 py-8 bg-neutral-100">
          <header className=" flex justify-between items-center ">
            <p className=" capitalize text-lg font-bold ">business</p>
            <p className=" font-bold text-2xl font-oswald ">
              <span className={pricing ? "hidden" : "block"}>P729.00</span>{" "}
              <span className={pricing ? "block" : "hidden"}>P8,019.00</span>
            </p>
          </header>
          <p className="font-light text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className=" flex justify-center ">
            <button className=" text-white bg-black py-2 w-full uppercase font-semibold text-sm ">
              get now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
