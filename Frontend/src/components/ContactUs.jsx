import React, { useState } from "react";
import toast from "react-hot-toast";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 dark:bg-slate-900">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-base-100 dark:bg-slate-900  focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-base-100 dark:bg-slate-900 focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-base-100 dark:bg-slate-900 focus:ring focus:ring-blue-300"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-base-100 dark:bg-slate-900  text-white py-2 rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
