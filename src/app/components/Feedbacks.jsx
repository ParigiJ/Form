import React from "react";
import feedbacks from "../data/feedbacks.json";

const AllFeedbacks = feedbacks.AllFeedbacks;

const Feedbacks = () => {
  return (
    <ul className="flex flex-col gap-2 bg-white rounded-b-2xl border-2 p-2 h-64 overflow-y-auto w-full ">
      {AllFeedbacks.map((feedback) => {
        return <FeedbackCard key={feedback.brand} {...feedback} />;
      })}
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

export default Feedbacks;
