"use client";

import Counter from "./Counter";
import useFetchData from "../../hooks/useFetchData";
import { useState, useEffect } from "react";

const Form = () => {
  const [brand, setBrand] = useState("");
  const { data: hashtags } = useFetchData("/api/hashtags");
  const maxLength = 150;
  const cachedFeedbacks = JSON.parse(localStorage.getItem("feedbacks") || []);
  const [feedback, setFeedback] = useState(cachedFeedbacks);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isFeedbackValid(feedback)) {
      await SubmitFeedback();
      resetForm();
      history.go(0);
    } else {
      alert("Include Hashtag");
    }
  };

  const isFeedbackValid = (feedback) => {
    return hashtags.some((hashtag) => {
      return feedback.toLowerCase().includes(hashtag.name.toLowerCase());
    });
  };

  const SubmitFeedback = async () => {
    const feedbackData = {
      brand,
      feedback,
    };
    try {
      const res = await fetch("../api/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });
      if (res.ok) {
        const feedback = await res.json();
        console.log("Feedback submitted successfully:", feedback);
        alert("Thank you for your feedback");
      } else {
        console.error("Failed to submit feedback:", await res.json());
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const resetForm = () => {
    setFeedback("");
    setBrand("");
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col w-full gap-2 rounded-t-2xl bg-black"
    >
      <h1 className="text-center text-2xl font-bold mt-4 ">Feedback</h1>
      <div className="flex flex-col relative justify-center items-center mb-10">
        <div className="flex flex-col justify-between w-3/4 mb-4">
          <label
            htmlFor="brand"
            id="brand"
            className="flex-none text-white font-bold text-2xl"
          >
            Brand: <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={brand}
            onChange={handleBrandChange}
            required
            className="flex-1 border-1 border-gray-300 rounded-md p-2 max-w-full outline-1 resize-none"
          />
        </div>
        <div className="flex flex-col w-3/4">
          <label
            htmlFor="feedback"
            className="flex-none text-white font-bold text-2xl"
          >
            Feedback: <span className="text-red-400">*</span>
          </label>
          <textarea
            name="textbox"
            id="textbox"
            cols="30"
            rows="6"
            maxLength={maxLength}
            value={feedback}
            onChange={handleChange}
            required
            className="flex border-1 border-gray-300 rounded-md p-2 w-full outline-1 resize-none"
          />
        </div>

        <div className="absolute bottom-2 left-20 text-sm">
          <Counter count={feedback.length} maxLength={maxLength} />
        </div>
        <button
          type="submit"
          className="absolute bottom-2 right-20 border-2 p-2 rounded-3xl w-20 hover:cursor-pointer bg-white text-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
