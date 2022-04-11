import React from "react";
import Img from "../../imgs/img25.jpg";

const First = () => {
  return (
    <section className=" pt-[10vh] md:flex ">
      <div className="img-container md:h-[400px] lg:w-[150%]">
        <img src={Img} alt="" className=" h-full w-full object-cover " />
      </div>
      <form
        action=""
        className=" shadow m-auto px-4 py-8 space-y-2 bg-black md:w-[50%] md:h-[400px] lg:w-[350px]"
      >
        <div className="form-container w-[300px] m-auto md:m-0 ">
          <div className="div text-white mb-6">
            <p className=" text-3xl font-bold text-center font-oswald md:text-left ">
              Contact Us
            </p>
            <p className=" text-center w-[93%] m-auto md:text-left md:w-full font-thin ">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis.
            </p>
          </div>
          <input
            type="text"
            placeholder="First Name"
            className=" p-2 w-full outline-none border-b-[1px] border-neutral-700 bg-black text-white placeholder:text-neutral-500 "
            required
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            className=" p-2 w-full outline-none border-b-[1px] border-neutral-700 bg-black text-white placeholder:text-neutral-500  "
            required
          />
          <br />
          <input
            type="number"
            placeholder="Mobile No."
            className=" p-2 w-full outline-none border-b-[1px] border-neutral-700 bg-black text-white placeholder:text-neutral-500  "
            required
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            className=" p-2 w-full outline-none border-b-[1px] border-neutral-700 bg-black text-white placeholder:text-neutral-500 "
            required
          />
          <br />
          <button
            type="submit"
            className=" p-2 w-full outline-none border-none bg-white text-black uppercase font-bold text-sm mt-4 "
          >
            submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default First;
