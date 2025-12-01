"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingImages() {
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
    <div className="h-[20rem] md:h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-2 md:pt-5 pb-2 md:pb-0">
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
    src: "/speakwisely/thumbnail.png",
    alt: "ChronoQuest",
  },
  {
    src: "/studymapper/thumbnail.png",
    alt: "studymapper",
  },
  {
    src: "/Delego.jpeg",
    alt: "Delego",
  },
  {
    src: "/leetcoach-thumbnail.png",  
    alt: "LeetCoach",
  },
  {
    src: "/memoral.jpeg",
    alt: "Memoral",
  },
  {
    src: "/racetheagescollage.png",
    alt: "racetheagescollage",
  },
];
