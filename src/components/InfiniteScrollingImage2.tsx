"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingImages2() {
  return (
    <div className="h-[15rem] md:h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0 md:pt-5 pb-2 md:pb-0">
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
    src: "/walk.jpeg",
    alt: "Snapchat Walk",
  },
  {
    src: "/clarion/164shots_so.jpeg",
    alt: "Clarion",
  },
  {
    src: "/memoral-win.jpeg",
    alt: "Memoral",
  },
  {
    src: "/codeclash.png",
    alt: "CodeClash",
  },
  {
    src: "/neuphonics-win.jpg",
    alt: "CodeClash",
  },
];
