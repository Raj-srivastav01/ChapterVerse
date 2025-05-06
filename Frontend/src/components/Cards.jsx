import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Cards({ item }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    setUser(storedUser);
  }, []);



  return (
    <div className="mt-4 my-3">
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 p-3 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="px-2 py-1 rounded border">₹{item.price}</div>
            <div
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 p-2"
              // Attach payment function
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
