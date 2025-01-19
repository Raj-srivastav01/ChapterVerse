import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import axios from "axios";

function Courses() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" pt-40 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-3xl">
            Find the Course That Speaks to{" "}
            <span className="text-pink-500">You </span>.
          </h1>
          <p className="mt-12">
            Whether you're into literature, technology, or the arts, our courses
            are designed to help you grow. Explore your passion and gain the
            skills to succeed.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
