"use client";
import React from "react";
import Counter from "./Counter";
import { useState } from "react";
import hashtags from "../data/hashtags.json";

const Form = () => {
  const [text, setText] = useState("");
  const [brand, setBrand] = useState("");
  const AllHashtags = hashtags.AllHashtags;
  const maxLength = 150;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (containsHashtag(text)) {
      console.log("Form submitted");
      setText("");
      setBrand("");
    } else {
      alert("Include Hashtag");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const containsHashtag = (text) => {
    return AllHashtags.some((hashtag) => {
      return text.toLowerCase().includes(hashtag.name.toLowerCase());
    });
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
            value={brand}
            onChange={handleBrandChange}
            className="flex-none text-white font-bold text-2xl"
          >
            Brand: <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
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
            value={text}
            onChange={handleChange}
            required
            className="flex border-1 border-gray-300 rounded-md p-2 w-full outline-1 resize-none"
          />
        </div>

        <div className="absolute bottom-2 left-20 text-sm">
          <Counter count={text.length} maxLength={maxLength} />
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
