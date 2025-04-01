"use client";
import React, { useState, useEffect } from "react";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("/api/feedbacks");
        const data = await res.json();
        setFeedbacks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <ul className="flex flex-col gap-2 bg-white rounded-b-2xl border-2 p-2 h-64 overflow-y-auto w-full">
      {loading
        ? Array(5)
            .fill(0)
            .map((_, index) => <SkeletonCard key={index} />)
        : feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.brand} {...feedback} />
          ))}
    </ul>
  );
};

const FeedbackCard = ({ brand, feedback }) => {
  return (
    <div className="flex flex-col border-2 p-2 rounded-2xl bg-foreground text-background">
      <h1 className="text-2xl">{brand}</h1>
      <p>{feedback}</p>
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="flex flex-col border-2 p-2 rounded-2xl bg-gray-300 animate-pulse">
      <div className="h-6 w-1/3 bg-gray-400 rounded-md mb-2"></div>
      <div className="h-4 w-2/3 bg-gray-400 rounded-md"></div>
    </div>
  );
};

export default Feedbacks;
