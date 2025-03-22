import React from "react";
import hashtags from "../data/hashtags.json";

const Hashtags = () => {
  const AllHashtags = hashtags.AllHashtags;
  return (
    <div className="flex flex-col gap-2">
      {AllHashtags.map((hashtag) => {
        return (
          <div
            key={hashtag.id}
            className="flex flex-col bg-background text-foreground 
            rounded-2xl p-2 hover: cursor-pointer"
          >
            <p className="text-white font-bold p-1">{hashtag.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Hashtags;
