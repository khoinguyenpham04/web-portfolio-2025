"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingImages2() {
  const [speed, setSpeed] = useState<"fast" | "normal" | "slow">("normal");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpeed("fast");
      } else {
        setSpeed("normal");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-[15rem] md:h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0 md:pt-5 pb-2 md:pb-0">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed={speed}
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
    src: "/omni-thumbnail.png",
    alt: "Omni",
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
