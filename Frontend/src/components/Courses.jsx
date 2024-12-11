import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

function Courses() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" pt-40 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-3xl">
            Find the Course That Speaks to{" "}
            <span className="text-pink-500">You </span>.
          </h1>
          <p mt-12>
            Whether you're into literature, technology, or the arts, our courses
            are designed to help you grow. Explore your passion and gain the
            skills to succeed.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
