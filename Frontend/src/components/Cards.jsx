import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Cards({ item }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    setUser(storedUser);
  }, []);

  useEffect(() => {
    // Load Razorpay script once when component mounts
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded!");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!user) {
      toast.error("Please log in to continue");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure VITE_ prefix in .env
      amount: item.price * 100,
      currency: "INR",
      name: "Your Store Name",
      description: `Payment for ${item.name}`,
      handler: function (response) {
        toast.success("Payment Successful!");
        console.log(response);
      },
      prefill: {
        email: user?.email || "test@example.com",
        contact: "6394924583",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

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
              onClick={handlePayment} // Attach payment function
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
