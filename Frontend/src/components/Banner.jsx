import React from "react";
import banner from ".././../public/banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-10">
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold ">
              Discover, Learn, and <br /> Escape Through
              <span className="text-pink-500"> Every Chapter!!!</span>
            </h1>
            <p className="text-xl">
              Find your escape in stories, satisfy your curiosity with drama and
              sports, and embark on journeys of learning—all in one place.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email :
              <input
                type="text"
                className="grow"
                placeholder="srivastavraj68@gmail.com"
              />
            </label>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2">
          <img src={banner} className="w-92 h-92 md:ml-40" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
