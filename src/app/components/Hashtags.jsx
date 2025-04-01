"use client";
import React from "react";
import useFetchData from "../../hooks/useFetchData";

const Hashtags = () => {
  const { data: hashtags, loading } = useFetchData("/api/hashtags");

  return (
    <div className="flex flex-col gap-2 w-1/4">
      {loading
        ? Array(5)
            .fill(0)
            .map((_, index) => <SkeletonHashtag key={index} />)
        : hashtags?.map((hashtag) => (
            <div
              key={hashtag.id}
              className="flex flex-col bg-background text-foreground 
              rounded-2xl p-2 hover: cursor-pointer"
            >
              <p className="text-white font-bold p-1">{hashtag.name}</p>
            </div>
          ))}
    </div>
  );
};

const SkeletonHashtag = () => {
  return (
    <div className="flex flex-col bg-gray-300 animate-pulse rounded-2xl p-2 w-full">
      <div className="h-8 w-1/3 bg-gray-400 rounded-md"></div>
    </div>
  );
};

export default Hashtags;
