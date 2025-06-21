"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingImages() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-5">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const images = [
  {
    src: "/speakwisely/thumbnail.png",
    alt: "ChronoQuest",
  },
  {
    src: "/studymapper/thumbnail.png",
    alt: "studymapper",
  },
  {
    src: "/blue-gradient-placeholder.jpg",
    alt: "Lanyard",
  },
  {
    src: "/chessmind/chessmind169.png",
    alt: "Blue background",
  },
];
