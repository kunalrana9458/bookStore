import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 md:mt-32 mt-12">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              voluptatibus obcaecati expedita laudantium ipsa eos amet modi,
              inventore consequatur provident nobis consequuntur aliquid ut
              tenetur at hic autem officia! Magni.
            </p>
          </div>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <button className="btn btn-active mt-6">Secondary</button>

        </div>
        <div className="w-full md:w-[500px] flex mt-20 ml-10">
            <img src="https://img.freepik.com/premium-photo/back-school_183640-457.jpg?w=740" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
