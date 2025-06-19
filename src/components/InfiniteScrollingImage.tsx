"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingImages() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-5">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const images = [
  {
    src: "/blue-bg.jpg",
    alt: "ChronoQuest",
  },
  {
    src: "/blue-gradient-placeholder.jpg",
    alt: "Blue gradient placeholder",
  },
  {
    src: "/blue-bg.jpg",
    alt: "Blue background",
  },
  {
    src: "/blue-gradient-placeholder.jpg",
    alt: "Lanyard",
  },
  {
    src: "/blue-bg.jpg",
    alt: "UOM",
  },
];
