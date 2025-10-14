"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const Form = ({ isColTwo }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For this portfolio, we'll just log the data and show a success message.
    console.log("Comment Submitted:", formData);

    // Show success message
    setIsSubmitted(true);

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      comment: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  return (
    <div className="bg-common_bg p-[30px] rounded-lg">
      <h3 className="mb-5 text-white capitalize sm:text-[32px] text-[26px] font-semibold">
        Leave a Reply
      </h3>
      <p className="text-clr_pra mb-[30px]">
        Your email address will not be published. Required fields are marked *
      </p>
      {isSubmitted ? (
        <div className="text-clr_base text-lg p-4 bg-[rgb(29_29_29)] rounded-lg border border-clr_base">
          Thank you for your comment! It has been submitted.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-6`}>
          <div
            className={`gap-6 flex ${
              isColTwo ? " sm:flex-row flex-col " : "flex-col"
            }`}
          >
            <div className={`w-full`}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none focus:border-clr_base"
              />
            </div>
            <div className={`w-full`}>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none focus:border-clr_base"
              />
            </div>
          </div>
          <div>
            <textarea
              name="comment"
              rows="5"
              placeholder="Write Comments *"
              value={formData.comment}
              onChange={handleChange}
              required
              className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none focus:border-clr_base"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-fit flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#107a37] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
          >
            <span className="z-10 relative duration-500">Submit Comment</span>
            <i className="z-10 relative duration-500 text-xl">
              <ArrowRight />
            </i>
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
